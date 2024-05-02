import { IoPerson } from 'react-icons/io5';
import { MdPayments } from 'react-icons/md';
import { FaUserAlt, FaAddressBook, } from 'react-icons/fa';



export const SidebarData = [
    
    {
      path: '/newregistration',
      name: 'New Registration',
      icon: <FaUserAlt />,
    },
    {
      path: '/payments',
      name: 'Payments',
      icon: <MdPayments />,
    },
    {
      path: '/subjects',
      name: 'Subjects',
      icon: <FaAddressBook />,
      subMenuItems: [
        { path: '/subjects/telugu', name: 'Telugu' },
        { path: '/subjects/hindi', name: 'Hindi' },
        { path: '/subjects/english', name: 'English' },
        { path: '/subjects/maths', name: 'Maths' },
        { path: '/subjects/science', name: 'Science' },
        { path: '/subjects/social', name: 'Social' },
      ],
    },
    {
      path: '/students',
      name: 'Students',
      icon: <IoPerson />,
    },
  ];