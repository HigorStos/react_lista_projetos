import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'
import { Titulo } from '../../components/Titulo/styles'

export const Nome = styled(Titulo)`
  margin-bottom: 8px;
`

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 8px;
`

export const SkillsIcons = styled.img`
  height: 32px;
  margin-bottom: 24px;
`

export const Linkedin = styled.img`
  margin-top: 8px;
  margin-bottom: 40px;
  border-radius: 8px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corTextoBotaoTema};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  border: none;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
