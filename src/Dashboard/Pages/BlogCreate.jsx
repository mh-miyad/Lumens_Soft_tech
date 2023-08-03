import React, { useState } from "react";

const BlogCreate = () => {
  const [color, setColor] = useState("#000000");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [textAlign, setTextAlign] = useState("left");
  const [lineHeight, setLineHeight] = useState("1");
  const [fontSize, setFontSize] = useState("12pt");
  const [fontFamily, setFontFamily] = useState("Arial");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleBoldClick = () => {
    setIsBold((prev) => !prev);
  };

  const handleItalicClick = () => {
    setIsItalic((prev) => !prev);
  };

  const handleUnderlineClick = () => {
    setIsUnderline((prev) => !prev);
  };

  const handleTextAlign = (value) => {
    setTextAlign(value);
  };

  const handleLineHeightChange = (e) => {
    setLineHeight(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  return (
    <div>
      <main className='container mx-auto flex flex-col text-center mt-5 mb-20'>
        <section className='container mx-auto '>
          <nav className='cursor-pointer rounded-lg mx-5 mb-4 bg-white py-4'>
            <button
              className={`hover:font-bold border-2 mx-1 rounded-sm ${
                isBold ? "font-bold" : ""
              } border-black px-2 bg-white text-indigo-600`}
              onClick={handleBoldClick}>
              B
            </button>
            <button className='hover:font-bold border rounded-sm border-black px-2 bg-white text-indigo-600 mx-1'>
              <input
                type='color'
                name=''
                value={color}
                onChange={handleColorChange}
              />
            </button>
            <button
              className={`hover:font-bold border rounded-sm ${
                isItalic ? "font-bold" : ""
              } border-black px-2 bg-white text-indigo-600 mx-1 italic font-semibold`}
              onClick={handleItalicClick}>
              I
            </button>
            <button
              className={`hover:font-bold border rounded-sm ${
                isUnderline ? "font-bold" : ""
              } border-black px-2 bg-white text-indigo-600 mx-1`}
              onClick={handleUnderlineClick}>
              <i className='bi bi-type-underline'></i>
            </button>
            <button
              className={`hover:font-bold border rounded-sm ${
                textAlign === "center" ? "font-bold" : ""
              } border-black px-2 bg-white text-indigo-600 mx-1`}
              onClick={() => handleTextAlign("center")}>
              <i className='bi bi-text-center'></i>
            </button>
            <button
              className={`hover:font-bold border rounded-sm ${
                textAlign === "right" ? "font-bold" : ""
              } border-black px-2 bg-white text-indigo-600 mx-1`}
              onClick={() => handleTextAlign("right")}>
              <i className='bi bi-justify-right'></i>
            </button>
            <button
              className={`hover:font-bold border rounded-sm ${
                textAlign === "justify" ? "font-bold" : ""
              } border-black px-2 bg-white text-indigo-600 mx-1`}
              onClick={() => handleTextAlign("justify")}>
              <i className='bi bi-justify'></i>
            </button>
            <select
              id='fontSize'
              className='rounded-full font-semibold'
              value={fontSize}
              onChange={handleFontSizeChange}>
              <option value='8pt'>Font Size</option>
              <option value='9pt'>9</option>
              <option value='10pt'>10</option>
              <option value='12pt'>12</option>
              <option value='16pt'>16</option>
              <option value='18pt'>18</option>
              <option value='20pt'>20</option>
              <option value='22pt'>22</option>
              <option value='24pt'>24</option>
            </select>

            <select
              id='font-selector'
              className='rounded-full font-semibold'
              value={fontFamily}
              onChange={handleFontFamilyChange}>
              <option value='Arial'>Arial</option>
            </select>
            <select
              id='lineHeight'
              className='rounded-full font-semibold'
              value={lineHeight}
              onChange={handleLineHeightChange}>
              <option value='1'>Line Height</option>
              {/* Add other options for line height */}
            </select>
          </nav>
        </section>

        <section className=''>
          <textarea
            name=''
            id='text-editor'
            style={{
              color: color,
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              textDecoration: isUnderline ? "underline" : "none",
              textAlign: textAlign,
              lineHeight: lineHeight,
              fontSize: fontSize,
              fontFamily: fontFamily,
            }}
            className='resize-none rounded-2xl shadow-2xl shadow-black/30 w-3/4 h-96 p-10'></textarea>
        </section>
      </main>
    </div>
  );
};

export default BlogCreate;
