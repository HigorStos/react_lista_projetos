import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet culpa alias
      eius distinctio repellat animi nemo asperiores voluptas sit dolorum cumque
      qui, perferendis totam quaerat magni rem autem tenetur dicta.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=HigorStos&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=HigorStos&layout=compact&langs_count=16&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
