import React from "react";

function TruncateText({text,maxLength}) {
  
    if (text.length <= maxLength) {
      return <span>{text}</span>;
    }
  
    const truncatedText = text.substring(0, maxLength) + '...';
  
    return <span title={text}>{truncatedText}</span>;
  }

  export default TruncateText;