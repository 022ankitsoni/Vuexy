import React from 'react';
import vue_logo from './vue_logo.png'
import { Box, Typography, Button, Divider } from '@mui/material';
import { 
  Dashboard as DashboardIcon, 
  Home as HomeIcon, 
  Mail as MailIcon, 
  Chat as ChatIcon, 
  CalendarToday as CalendarIcon, 
  List as KanbanIcon, 
  ShoppingCart as EcommerceIcon, 
  School as AcademyIcon, 
  LocalShipping as LogisticsIcon, 
  Receipt as InvoiceIcon, 
  Group as UsersIcon, 
  Security as RolesIcon, 
  Pageview as PagesIcon, 
  Lock as AuthenticationsIcon, 
  Widgets as WizardExamplesIcon, 
  ViewModule as ViewModuleIcon, 
  CardTravel as CardsIcon, 
  Dashboard as UiIcon, 
  Extension as ExtendedUIIcon, 
  EmojiObjects as IconsIcon, 
  FormatListBulleted as FormElementsIcon, 
  ViewQuilt as FormLayoutsIcon, 
  Loop as FormWizardIcon, 
  CheckCircle as FormValidationsIcon, 
  TableChart as TablesIcon, 
  BarChart as ChartsIcon, 
  Map as LeafletMapsIcon, 
  Support as SupportIcon, 
  Help as DocumentationIcon 
} from '@mui/icons-material';

const LeftSidebar = () => {
  return (
    <Box
      sx={{
        width: 200,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #ddd',
        p: 2,
        bgcolor: '#ffffff' 
      }}
    >
    
      <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
        <img
          src={vue_logo}
          alt="Logo"
          style={{ width: 35, height: 27, marginRight: 16 }} 
        />
        <Typography sx={{ 
            fontSize: '1.5rem',
            fontWeight: 'bold', 
            color: '#000000'
          }}>Vuexy</Typography>
      </Box>

     
      <Box sx={{ mb: 1 }}>
        <Button startIcon={<DashboardIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          dashboard
        </Button>
        <Button startIcon={<ViewModuleIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          layout
        </Button>
        <Button startIcon={<HomeIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          front pages
        </Button>
      </Box>

     

      
      <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, color: '#9e9e9e', fontSize: '0.78rem' }}>Apps and Pages</Typography> 
        <Button startIcon={<MailIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          email
        </Button>
        <Button startIcon={<ChatIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          chat
        </Button>
        <Button startIcon={<CalendarIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          calendar
        </Button>
        <Button startIcon={<KanbanIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          kanban
        </Button>
        <Button startIcon={<EcommerceIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          ecommerce
        </Button>
        <Button startIcon={<AcademyIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          academy
        </Button>
        <Button startIcon={<LogisticsIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          logistics
        </Button>
        <Button startIcon={<InvoiceIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          invoice
        </Button>
        <Button startIcon={<UsersIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          users
        </Button>
        <Button startIcon={<RolesIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          roles and permissions
        </Button>
        <Button startIcon={<PagesIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          pages
        </Button>
        <Button startIcon={<AuthenticationsIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          authentications
        </Button>
        <Button startIcon={<WizardExamplesIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          wizard examples
        </Button>
        <Button startIcon={<ViewModuleIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          model examples
        </Button>
      </Box>

    

      
      <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, color: '#9e9e9e', fontSize: '0.78rem' }}>Components</Typography> 
        <Button startIcon={<CardsIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          cards
        </Button>
        <Button startIcon={<UiIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          user interface
        </Button>
        <Button startIcon={<ExtendedUIIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          extended ui
        </Button>
        <Button startIcon={<IconsIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          icons
        </Button>
      </Box>

      

      
      <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, color: '#9e9e9e', fontSize: '0.78rem' }}>Forms and Tables</Typography> 
        <Button startIcon={<FormElementsIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          form elements
        </Button>
        <Button startIcon={<FormLayoutsIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          form layouts
        </Button>
        <Button startIcon={<FormWizardIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          form wizard
        </Button>
        <Button startIcon={<FormValidationsIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          form validations
        </Button>
        <Button startIcon={<TablesIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          tables
        </Button>
      </Box>


      
      <Box sx={{ mb:1 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, color: '#9e9e9e', fontSize: '0.78rem' }}>Charts and Maps</Typography> 
        <Button startIcon={<ChartsIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          charts
        </Button>
        <Button startIcon={<LeafletMapsIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          leaflet maps
        </Button>
      </Box>

     
      <Box>
        <Typography variant="subtitle1" sx={{ mb: 1, color: '#9e9e9e', fontSize: '0.78rem' }}>MISC</Typography>
        <Button startIcon={<SupportIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          support
        </Button>
        <Button startIcon={<DocumentationIcon />} sx={{ justifyContent: 'flex-start', width: '100%', mb: 1, color: '#000000', fontSize: '0.78rem', textTransform: 'capitalize' }}>
          documentation
        </Button>
      </Box>
    </Box>
  );
};

export default LeftSidebar;
