import React, {
  cloneElement,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactElement,
  useMemo,
} from "react";

import {
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import IoCaretForwardOutline from "../../icons/Play";

import MenuContext from "../FloatingMenuContext";

import styles from "./FloatingContextMenu.module.scss";

interface FloatingContextMenuProps {
  children: ReactElement | ReactElement[];
  component?: ReactElement;
  label?: ReactElement | ReactElement[] | string;
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
}

const FloatingContextMenu = forwardRef<
  HTMLDivElement,
  FloatingContextMenuProps
>(({ children, component, label, ...props }, forwardedRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasFocusInside, setHasFocusInside] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const elementsRef = useRef<Array<HTMLDivElement | null>>([]);
  const labelsRef = useRef<Array<string>>([]);
  const allowMouseUpCloseRef = useRef(false);
  const parent = useContext(MenuContext);
  const tree = useFloatingTree();

  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const item = useListItem();
  const isNested = parentId != null;

  const componentRef = useRef<HTMLElement>(null);

  const { floatingStyles, refs, context } = useFloating({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: isNested ? "right-start" : "bottom-start",
    middleware: [
      offset({
        mainAxis: isNested ? 0 : 4,
        alignmentAxis: isNested ? -4 : 0,
      }),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, {
    enabled: isNested,
    delay: { open: 75 },
    handleClose: safePolygon({ blockPointerEvents: true }),
  });
  const click = useClick(context, {
    event: "mousedown",
    toggle: !isNested,
    ignoreMouse: isNested,
  });
  const role = useRole(context, { role: "menu" });
  const dismiss = useDismiss(context, { bubbles: true });
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex,
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: isOpen ? setActiveIndex : undefined,
    activeIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [hover, click, role, dismiss, listNavigation, typeahead],
  );

  useEffect(() => {
    let timeout: number;

    const onContextMenu = (e: MouseEvent) => {
      if (componentRef?.current) {
        if (
          e.target === componentRef.current ||
          componentRef?.current.contains(e?.target as Node)
        ) {
          e.preventDefault();
          refs.setPositionReference({
            getBoundingClientRect() {
              return {
                width: 0,
                height: 0,
                x: e.clientX,
                y: e.clientY,
                top: e.clientY,
                right: e.clientX,
                bottom: e.clientY,
                left: e.clientX,
              };
            },
          });

          setIsOpen(true);
          clearTimeout(timeout);

          allowMouseUpCloseRef.current = false;
          timeout = window.setTimeout(() => {
            allowMouseUpCloseRef.current = true;
          }, 300);
        }
      } else {
        e.preventDefault();
        refs.setPositionReference({
          getBoundingClientRect() {
            return {
              width: 0,
              height: 0,
              x: e.clientX,
              y: e.clientY,
              top: e.clientY,
              right: e.clientX,
              bottom: e.clientY,
              left: e.clientX,
            };
          },
        });

        setIsOpen(true);
        clearTimeout(timeout);

        allowMouseUpCloseRef.current = false;
        timeout = window.setTimeout(() => {
          allowMouseUpCloseRef.current = true;
        }, 300);
      }
    };

    function onMouseUp() {
      if (allowMouseUpCloseRef.current) {
        setIsOpen(false);
      }
    }

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("mouseup", onMouseUp);
      clearTimeout(timeout);
    };
  }, [refs, component]);

  useEffect(() => {
    if (!tree) return;

    function handleTreeClick() {
      setIsOpen(false);
    }

    function onSubMenuOpen(event: { nodeId: string; parentId: string | null }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false);
      }
    }

    tree.events.on("click", handleTreeClick);
    tree.events.on("menuopen", onSubMenuOpen);

    return () => {
      tree.events.off("click", handleTreeClick);
      tree.events.off("menuopen", onSubMenuOpen);
    };
  }, [tree, nodeId, parentId]);

  useEffect(() => {
    if (isOpen && tree) {
      tree.events.emit("menuopen", { parentId, nodeId });
    }
  }, [tree, isOpen, nodeId, parentId]);

  const contextObject = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
      getItemProps,
      setHasFocusInside,
      isOpen,
    }),
    [],
  );

  return (
    <>
      {component
        ? cloneElement(component, {
            ref: componentRef,
          })
        : null}
      <FloatingNode id={nodeId}>
        <div
          ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
          tabIndex={
            !isNested ? undefined : parent.activeIndex === item.index ? 0 : -1
          }
          role={isNested ? "menuitem" : undefined}
          data-open={isOpen ? "" : undefined}
          data-nested={isNested ? "" : undefined}
          data-focus-inside={hasFocusInside ? "" : undefined}
          className={isNested ? styles.menuItem : ""}
          {...getReferenceProps(
            parent.getItemProps({
              ...props,
              onFocus(event: React.FocusEvent<HTMLDivElement, Element>) {
                props.onFocus?.(event);
                setHasFocusInside(false);
                parent.setHasFocusInside(true);
              },
            }),
          )}
        >
          {label}
          {isNested && <IoCaretForwardOutline />}
        </div>
        <MenuContext.Provider value={contextObject}>
          <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
            {isOpen && (
              <FloatingPortal>
                <FloatingFocusManager
                  context={context}
                  modal={false}
                  initialFocus={isNested ? -1 : 0}
                  returnFocus={!isNested}
                >
                  <div
                    ref={refs.setFloating}
                    className={styles.menu}
                    style={floatingStyles}
                    {...getFloatingProps()}
                  >
                    {children}
                  </div>
                </FloatingFocusManager>
              </FloatingPortal>
            )}
          </FloatingList>
        </MenuContext.Provider>
      </FloatingNode>
    </>
  );
});

FloatingContextMenu.displayName = "FloatingContextMenu";

export default FloatingContextMenu;