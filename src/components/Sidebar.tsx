import React from "react";
import { Drawer, List, ListItem } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../img/logo.png";

import icon_1 from "../img/icons/icon_1.png";
import icon_2 from "../img/icons/icon_2.png";
import icon_3 from "../img/icons/icon_3.png";
import icon_4 from "../img/icons/icon_4.png";
import { useNavigate } from "react-router-dom";

import "../main.css";

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
    const DrawerStyled = styled(Drawer)(({ theme }) => ({
        width: 100,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
            width: 100,
            boxSizing: "border-box",
        },
    }));
    const navigate = useNavigate();

    return (
        <DrawerStyled
            variant="persistent"
            anchor="left"
            open={open}
            onClick={onClose}>
            <List className="sidebar_list">
                <img
                    src={logo}
                    alt="Logo"
                    style={{
                        cursor: "pointer",
                        width: "35px",
                        marginBottom: "15px",
                    }}
                    onClick={() => {
                        onClose();
                    }}
                />
                <ListItem className="list_item">
                    <img
                        src={icon_1}
                        alt=""
                        style={{ filter: "grayscale(1)" }}
                        width={"20px"}
                    />
                </ListItem>
                <ListItem className="list_item">
                    <img
                        src={icon_2}
                        alt=""
                        style={{ filter: "grayscale(1)" }}
                        width={"20px"}
                    />
                </ListItem>
                <ListItem className="list_item">
                    <img
                        src={icon_3}
                        alt=""
                        style={{ filter: "grayscale(1)" }}
                        width={"20px"}
                    />
                </ListItem>
                <ListItem
                    className="list_item"
                    onClick={() => navigate("/add")}>
                    <img
                        src={icon_4}
                        alt=""
                        // onClick={() => {}}
                        style={{ filter: "grayscale(0)" }}
                        width={"20px"}
                    />
                </ListItem>
            </List>
        </DrawerStyled>
    );
};

export default Sidebar;
