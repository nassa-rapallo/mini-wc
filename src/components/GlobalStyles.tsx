import { up } from 'styled-breakpoints'
import { createGlobalStyle } from 'styled-components'

import fontsFaces from 'app/theme/fontFaces'

const GlobalStyles = createGlobalStyle`

    ${fontsFaces.regular}
    ${fontsFaces.bold}
    ${fontsFaces.light}

    body {
        background: ${({ theme }) => theme.palette.bg};
        color: ${({ theme }) => theme.palette.blackNassa};
        
        font-family: ${({ theme }) => theme.typo.family.main};
        font-size: ${({ theme }) => theme.typo.size.paragraph};

        & > div#root {
            display: flex;
            flex-direction: column; 
            min-height: 100vh;
            ${up('sm')}{
                /* width: 80%; */
                margin: 0 auto;
         }
      }
    }
`

export default GlobalStyles
