import styled from 'styled-components'

const StyledMapaHeader = styled.section`
    display: grid;
    /*grid-template-columns: repeat(8, 1fr) 15px;*/
    grid-template-columns: repeat(8, 1fr);
    box-sizing: border-box;
`

const StyledLinhaLeito = styled.div`
    display: grid;
    grid-template-columns: 1fr 7fr;
`

const StyledLinhaHospedagem = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border-color: red;
    border-width: 1px;
`

const StyledMapaBody = styled.section`
    padding:0 0px;
    overflow-y:auto;
`

const StyledCellVazia = styled.div`
  background: white;
  /*padding: 0.25em 1em;*/
  border: 1px solid #aaa;
  text-align: center;
  margin: -1px -1px 0 0;
  min-height: 30px;
`

const StyledCellHeader = styled(StyledCellVazia)`
  background: papayawhip;
`

const StyledText = styled.div`
   font-size: 1em; 
`

const StyledTextBold = styled.div`
    font-size: 1em;
    font-weight: bold;
`

const StyledDiaHospedagem = styled.div`
    font-size:9pt;
    /*min-height: 30px;*/
    height: 2em;
    padding: 5px 10px;
    overflow:hidden;

    margin-top: 2px;
    margin-bottom: 2px;

    margin-left: ${(props) => (props.classeIni === 'inicio' ? '2px' : '0px')};
    margin-right: ${(props) => (props.classeFim === 'fim' ? '2px' : '0px')};
    background-color: ${(props) => props.fundo || 'transparent'};
    border-top-left-radius: ${(props) => (props.classeIni === 'inicio' ? '12px' : '0px')};
    border-bottom-left-radius: ${(props) => (props.classeIni === 'inicio' ? '12px' : '0px')};

    border-top-right-radius: ${(props) => (props.classeFim === 'fim' ? '12px' : '0px')};
    border-bottom-right-radius: ${(props) => (props.classeFim === 'fim' ? '12px' : '0px')};

    border-color:#000;
    border-style: dotted;
    border-width: 0px 
                  ${(props) => ((props.classeFim === 'baixado' || props.classeFim === 'indo') ? '4px' : '0px')} 
                  0px 
                  ${(props) => ((props.classeIni === 'vindo') ? '4px' : '0px')};

    cursor: pointer;
`
export {
    StyledMapaHeader,
    StyledLinhaLeito,
    StyledLinhaHospedagem,
    StyledMapaBody,
    StyledCellVazia,
    StyledCellHeader,
    StyledText,
    StyledTextBold,
    StyledDiaHospedagem
}
