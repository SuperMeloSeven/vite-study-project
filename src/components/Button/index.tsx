import React, { useState } from 'react';
import styled from 'styled-components';

// 定义ButtonProps接口
interface ButtonProps {
  bgColor?: string;
  onClick?: () => void;
}

// 定义StyledButton组件，放在组件外部
const StyledButton = styled.button<ButtonProps>`
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  /* 使用props来设置动态背景颜色 */
  ${({ bgColor }) => bgColor && `background-color: ${bgColor}`};
`;

// 创建按钮组件
const Button: React.FC<ButtonProps> = (props) => {
  // 定义状态和事件处理程序
  const [bgColor, setBgColor] = useState('blue');

  const handleButtonClick = () => {
    setBgColor('orange');
    console.log('测试点击事件');
  };

  return (
    <StyledButton as="div" style={{ backgroundColor: bgColor }} onClick={handleButtonClick} {...props}>
      我是styled-components
    </StyledButton>
  );
};

export default Button;
