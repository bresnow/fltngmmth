import React from 'react';
export type IContentEditable = {
  children: React.ReactNode;
  name: string;
  id: string;
  edit?: boolean | undefined;
  file?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;



export const ContentEditable = ({
  children,
  name,
  id,
  edit,
  file,
  ...props
}: IContentEditable) => {
  let ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (ref.current && ref.current instanceof HTMLDivElement) {
      let el = ref.current;
      let input = document.getElementById(`${name}-${id}`);
      el.onload = ({ target, type }) => {
        if (
          target instanceof HTMLDivElement &&
          input instanceof HTMLInputElement
        ) {
          input.defaultValue = target.innerText;
        }
      };
      el.oninput = ({ target, type }) => {
        if (
          target instanceof HTMLDivElement &&
          input instanceof HTMLInputElement
        ) {
          input.value = target.innerText;
        }
      };
    }
  }, [children]);
  return (
    <>
      <div
        ref={ref}
        {...props}
        contentEditable={edit}
        suppressContentEditableWarning={true}
      >
        {children}
      </div>
      <input id={`${name}-${id}`} name={name} type='hidden' />
    </>
  );
};
