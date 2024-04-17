import React, { useState } from 'react';


const Dropdown: React.FC<DropdownProps> = ({
  clicked,
  disabled,
  content,
  background,
  items = [],
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = (item: string) => {
    if (onSelect) {
      onSelect(item);
      setIsOpen(false);
    }
  };

  return (
    <div
      data-testid="Dropdown"
      onClick={handleDropdownClick}
      style={{
        backgroundColor: background,
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: '10px',
        width: '150px',
        textAlign: 'center',
      }}
    >
      {content}
      {isOpen && (
        <div style={{ marginTop: '10px', backgroundColor: 'lightgrey' }}>
          {items.map((item) => (
            <div
              key={item}
              onClick={() => handleItemClick(item)}
              style={{ padding: '5px', cursor: 'pointer' }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
