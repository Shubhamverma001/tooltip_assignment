import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = () => {
  const [enteredText, setEnteredText] = useState('');
  const [tooltipTexts, setTooltipTexts] = useState({});
  const [textSize, setTextSize] = useState('16px');
  const [paddingSize, setPaddingSize] = useState('8px');
  const [textColor, setTextColor] = useState('#000');
  const [cornerRadius, setCornerRadius] = useState('4px');
  const [tooltipWidth, setTooltipWidth] = useState('auto');
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleTextChange = (e) => {
    setEnteredText(e.target.value);
  };

  const handleShowTooltip = (buttonId) => {
    setTooltipTexts((prevState) => ({ ...prevState, [buttonId]: enteredText }));
    setHoveredButton(buttonId);
  };

  const handleHideTooltip = (buttonId) => {
    setTooltipTexts((prevState) => ({ ...prevState, [buttonId]: '' }));
    setHoveredButton(null);
  };

  const handleTextSizeChange = (e) => {
    setTextSize(e.target.value + 'px');
  };

  const handlePaddingSizeChange = (e) => {
    setPaddingSize(e.target.value + 'px');
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleCornerRadiusChange = (e) => {
    setCornerRadius(e.target.value + 'px');
  };

  const handleTooltipWidthChange = (e) => {
    setTooltipWidth(e.target.value + 'px');
  };

  return (
    <div className="tooltip-container">
      <div className="form-container">
        <form>
          <div className="hovered-button-box">
            {hoveredButton && (
              <span>
                Hovered Button: {hoveredButton}
              </span>
            )}
          </div>

          <label htmlFor="enteredText">Enter Text:</label>
          <input type="text" id="enteredText" value={enteredText} onChange={handleTextChange} />

          <div className="options-container">
            <label htmlFor="textSize">Text Size:</label>
            <input type="number" id="textSize" value={parseInt(textSize)} onChange={handleTextSizeChange} />

            <label htmlFor="paddingSize">Padding Size:</label>
            <input
              type="number"
              id="paddingSize"
              value={parseInt(paddingSize)}
              onChange={handlePaddingSizeChange}
            />
          </div>

          <div className="options-container">
            <label htmlFor="textColor">Text Color:</label>
            <input
              type="color"
              id="textColor"
              value={textColor}
              onChange={handleTextColorChange}
            />
          </div>

          <div className="options-container">
            <label htmlFor="cornerRadius">Corner Radius:</label>
            <input
              type="number"
              id="cornerRadius"
              value={parseInt(cornerRadius)}
              onChange={handleCornerRadiusChange}
            />

            <label htmlFor="tooltipWidth">Tooltip Width:</label>
            <input
              type="number"
              id="tooltipWidth"
              value={parseInt(tooltipWidth)}
              onChange={handleTooltipWidthChange}
            />
          </div>
        </form>
      </div>

      <div className="tooltip-buttons-container">
        {[1, 2, 3, 4, 5].map((buttonId) => (
          <span
            key={buttonId}
            className={`tooltip-button ${hoveredButton === buttonId ? 'target-button' : ''}`}
            onMouseEnter={() => handleShowTooltip(buttonId)}
            onMouseLeave={() => handleHideTooltip(buttonId)}
          >
            Hover to Show Tooltip
            {tooltipTexts[buttonId] && (
              <span
                className="tooltip"
                style={{
                  fontSize: textSize,
                  padding: paddingSize,
                  color: textColor,
                  borderRadius: cornerRadius,
                  width: tooltipWidth,
                }}
              >
                {tooltipTexts[buttonId]}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tooltip;