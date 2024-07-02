import styled from 'styled-components'
import { FcCheckmark, FcFullTrash } from "react-icons/fc";

/*o nome da variavel precisa começar com letra maiuscula*/

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ToDoList = styled.div`
   background: white;
   padding: 30px 20px;
   border-radius: 5px;

   ul{
    padding: 0;
    margin-top: 40px;
   }
`;
export const Input = styled.input`
    border-radius: 5px;
    border: 2px solid rgba(209, 211, 212, 0.40);
    height: 40px;
    margin-right: 40px;
    width: 342px;
`;
export const Button = styled.button`
    background: #8052ec;
    color: white;
    border: none;
    border-radius: 5px;
    height: 40px;
    width: 130px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }

`;
export const ListItem = styled.div`
    border-radius: 5px;
    background: ${ (props) => (props.isFinished ? '#E8FF8B' : '#e4e4e4')};
    box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.2);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 0 10px;
    width: 500px;

    li{
        list-style: none;
    }


`;
export const Trash = styled(FcFullTrash)`
    cursor: pointer;
   
`;
export const Checked = styled(FcCheckmark)`
    cursor: pointer;
    
`;
