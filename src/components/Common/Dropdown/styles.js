import styled from "styled-components";

export const DropdownMenu = styled.div`
position: absolute;
top: 100%;
left: 0;
background-color: #f9f9f9;
border: 1px solid #ccc;
border-radius: 4px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
width: 100%;
z-index: 1;
`;

export const DropdownOption = styled.div`
width: 100%;
cursor: pointer;
display: flex;
justify-content: center;
padding: 10px 0 10px 0;

&:hover {
background-color: #ddd;
}
`;