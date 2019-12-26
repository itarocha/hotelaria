import styled from 'styled-components'

const StyledGrantt = styled.div`
    display: grid;
    width: 100%;
    border-color: #ccc;
    border-width: 0px 0px 1px 0px;
    border-style: solid;
    position: relative;
    overflow: hidden;
`

const StyledWrap = styled.div`
    display: grid;
    grid-template-columns: 100px repeat(7, 1fr);
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: transparent;

    span {
        display: block;
        height:100%;
        border-right: 1px solid #ccc;
    }
`

const StyledLinha = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    box-sizing: border-box;
`
const StyledTitulo = styled.div`
    background-color: papayawhip;
    border-color: #ccc;
    border-width: 1px 1px 0 1px;
    border-style: solid;
    text-align: center;
`

const StyledCellHeader = styled(StyledTitulo)`
    border-width: 0px 0px 0 0px;
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    list-style: none;
    margin: 0px;
    box-sizing: border-box;
    grid-gap: 1px;
    border-color: #ccc;
    border-width: 1px;
    border-width: 1px 1px 0 0;
    border-style: solid;
    background-color: #f5f5f5;
`

const StyledHospede = styled.div`
    cursor: pointer;
    overflow: hidden;
    position:relative;
    padding: 8px;
    margin:2px;
    font-size: 0.8em;
    background-color:#2ecaac;
    grid-column: ${(props) => props.colIni + 1}/${(props) => props.colFim + 2};
    background-color: ${(props) => props.fundo || 'transparent'};

    margin-left: ${(props) => (props.classeIni === 'inicio' ? '2px' : '0px')};
    margin-right: ${(props) => (props.classeFim === 'fim' ? '2px' : '0px')};
    border-top-left-radius: ${(props) => (props.classeIni === 'inicio' ? '20px' : '0px')};
    border-bottom-left-radius: ${(props) => (props.classeIni === 'inicio' ? '20px' : '0px')};

    border-top-right-radius: ${(props) => (props.classeFim === 'fim' ? '20px' : '0px')};
    border-bottom-right-radius: ${(props) => (props.classeFim === 'fim' ? '20px' : '0px')};

    border-color:#000;
    border-style: ${(props) => (props.classeFim === 'baixado' ? 'solid' : 'dotted')};

    border-width: 0px 
                  ${(props) => ((props.classeFim === 'baixado' || props.classeFim === 'indo') ? '4px' : '0px')} 
                  0px 
                  ${(props) => ((props.classeIni === 'vindo') ? '4px' : '0px')};
`

const StyledText = styled.div`
   font-size: 1em; 
`

const StyledTextBold = styled.div`
    font-size: 1em;
    font-weight: bold;
`

export {
    StyledCellHeader,
    StyledText,
    StyledTextBold,
    StyledGrantt,
    StyledWrap,
    StyledLinha,
    StyledGrid,
    StyledTitulo,
    StyledHospede
}
