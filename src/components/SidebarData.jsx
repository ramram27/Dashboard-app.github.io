
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import EvStationRoundedIcon from '@mui/icons-material/EvStationRounded';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const SidebarData = [

  {
   title : "PROFILE",
   icon : <PermIdentityIcon/>,
   link :"/profile"
 },
  {
    title : "ALL FEATURES",
    icon : <KeyboardIcon />,
    iconClosed: < KeyboardArrowDownIcon />,
    link :"/all"
  },
  {
    title : "HYGIENE",
    icon : <ThumbUpOffAltIcon/>,
    iconClosed: < KeyboardArrowDownIcon />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    link :"/hygiene",

    subNav: [
      {
        title: "HYGIENE 1",
        path: "/hyhiene1",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "HYGIENE 2",
        path: "/hyhiene2",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "HYGIENE 3",
        path: "/hyhiene3",
        // icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title : "SAFETY",
    icon : <HealthAndSafetyRoundedIcon />,
    iconClosed: < KeyboardArrowDownIcon />,
    link :"/menu"
  },
  {
    title : "QUALITY",
    icon : <ThumbUpOffAltIcon/>,
    iconClosed: < KeyboardArrowDownIcon />,
    link :"/quality"
  },
  {
    title : "QUALITY",
    icon : <ThumbUpOffAltIcon/>,
    iconClosed: < KeyboardArrowDownIcon />,
    link :"/quality"
  },
  {
    title : "LIVE VIEW",
    icon : <EvStationRoundedIcon/>,
    iconClosed: < KeyboardArrowDownIcon />,
    link :"/live"
  }
  
  ];
 
