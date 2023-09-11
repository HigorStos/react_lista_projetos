import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Estudante de Ciência da Computação e Desenvolvedor Front-End, sou
      apaixonado por conectar ideias criativas com tecnologia.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=HigorStos&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=HigorStos&layout=compact&langs_count=16&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
