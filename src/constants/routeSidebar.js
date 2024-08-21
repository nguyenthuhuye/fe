import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


export const ADMIN = [
    {
        typography: "",
        children: [
            {
                title: "Dashboard",
                to: null,
                icon: <HomeOutlinedIcon />,
            }
        ]
    },
    {
        typography: "Data",
        children: [
            {
                title: "Manage Team",
                to: null,
                icon: <PeopleOutlinedIcon />,
            },
            {
                title: "Contacts Information",
                to: null,
                icon: <ContactsOutlinedIcon />,
            },
            {
                title: "Invoices Balances",
                to: null,
                icon: <ReceiptOutlinedIcon />,
            },
        ]
    },
    {
        typography: "Pages",
        children: [
            {
                title: "Profile Form",
                to: null,
                icon: <PersonOutlinedIcon />,
            },
            {
                title: "Calendar",
                to: null,
                icon: <CalendarTodayOutlinedIcon />,
            },
            {
                title: "FAQ Page",
                to: null,
                icon: <HelpOutlineOutlinedIcon />,
            },
        ]
    },
    {
        typography: "Charts",
        children: [
            {
                title: "Bar Chart",
                to: null,
                icon: <BarChartOutlinedIcon />,
            },
            {
                title: "Pie Chart",
                to: null,
                icon: <PieChartOutlineOutlinedIcon />,
            },
            {
                title: "Line Chart",
                to: null,
                icon: <TimelineOutlinedIcon />,
            },
            {
                title: "Geography Chart",
                to: null,
                icon: <MapOutlinedIcon />,
            },
        ]
    },
];


