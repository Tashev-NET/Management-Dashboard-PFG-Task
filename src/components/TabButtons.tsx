import React from "react";

type TabButtonsProps = {
  buttons: string[];
  singleButton: string;
  selected: string;
  onClick: (text: string) => void;
};
const TabButtons: React.FC<TabButtonsProps> = ({
  buttons,
  singleButton,
  selected,
  onClick = () => {},
}) => {
  return (
    <>
      {singleButton ? (
        <div className="flex border border-gray-300 rounded-md w-full">
          <button
            className={`flex-1 px-6 py-2 focus:outline-none ${
              selected === singleButton
                ? "font-semibold text-white bg-blue-500"
                : "text-gray-700"
            }`}
          >
            {singleButton}
          </button>
        </div>
      ) : (
        <div className="flex border border-gray-300 rounded-md w-full">
          {buttons?.map((text:string, i:number) => (
            <button
              key={i}
              className={`flex-1 px-6 py-2 focus:outline-none ${
                selected === text
                  ? "font-semibold text-white bg-blue-500"
                  : "text-gray-700"
              }`}
              onClick={() => {
                onClick(text);
              }}
            >
              {text}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default TabButtons;
