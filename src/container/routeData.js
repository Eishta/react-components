import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Form from '../components/Forms/dynamic_forms_using_json/Form';
import CustomForm from '../components/Forms/Hooks/useFormHook/Form';
import CustomInputForm from '../components/Forms/Hooks/useInputHook/Form'
import AccordianComp from '../components/AccordianComp/AccordianComp';
import AlertContainer from '../components/AlertBox/AlertContainer';
import ButtonContainer from '../components/Button/ButtonContainer';

const routeData = {
    topNav: [
        {
            path: '/home',
            title: 'home',
            component: Home
        },
        {
            path: '/about',
            title: 'about',
            component: About
        },
        {
            path: '/projects',
            title: 'projects',
            component: About
        },
        {
            path: '/education',
            title: 'education',
            component: About
        },
        {
            path: '/contact',
            title: 'contact',
            component: Contact
        }

    ],
    sidebar: [
        {
            path: '/home/form',
            title: 'form',
            component: Form
        },
        {
            path: '/home/customform',
            title: 'customform',
            component: CustomForm
        },
        {
            path: '/home/custominput',
            title: 'custominput',
            component: CustomInputForm
        },
        {
            path: '/home/accordian',
            title: 'Accordian',
            component: AccordianComp
        },
        {
            path: '/home/alertbox',
            title: 'AlertBox',
            component: AlertContainer
        },
        {
            path: '/home/button',
            title: 'button',
            component: ButtonContainer
        },
        {
            path: '/home/Carousel',
            title: 'carousel',
            component: About
        },
        {
            path: '/home/checkbox',
            title: 'checkbox',
            component: Contact
        }
    ]
}

export default routeData