import './estilo.css'
import Logo from '../Logo'
import OpcoesHeader from '../Opcoes-Header'
import IconesHeader from '../Icones-Header'



function Header() 
{
    return(
        <header className='App-header'>
            
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>

        </header>
    )
}

export default Header