import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto
          titulo="GitHub Profiles"
          descricao="Visualizador de perfis do GitHub, desenvolvido com ReactJS."
          link="https://github.com/HigorStos/react_github_profiles"
        />
      </li>
      <li>
        <Projeto
          titulo="Calculadora IMC"
          descricao="Calculadora de índice de massa corporal, desenvolvida com ReactJS."
          link="https://github.com/HigorStos/react_imc_calc"
        />
      </li>
      <li>
        <Projeto
          titulo="Lista de Tarefas"
          descricao="Lista de tarefas com filtro, desenvolvida com o framework VueJS."
          link="https://github.com/HigorStos/vue_to-do_list"
        />
      </li>
      <li>
        <Projeto
          titulo="Calculadora Aritmética"
          descricao="Calculadora aritmética, desenvolvida com o framework VueJS."
          link="https://github.com/HigorStos/vue_calculator"
        />
      </li>
      <li>
        <Projeto
          titulo="Spider-Man 2"
          descricao="Criei uma landing page para promover o jogo Spider-Man 2."
          link="https://github.com/HigorStos/js_spider-man_2"
        />
      </li>
      <li>
        <Projeto
          titulo="Disney+"
          descricao="Clone da landing page do Disney+, realizado em aula na EBAC."
          link="https://github.com/HigorStos/js_disney-plus"
        />
      </li>
      <li>
        <Projeto
          titulo="Smart Fit"
          descricao="Landing page sobre a rede de academias Smart Fit."
          link="https://github.com/HigorStos/bootstrap_smartfit"
        />
      </li>
      <li>
        <Projeto
          titulo="MusicFy"
          descricao="Página sobre músicas e álbuns da semana, inspirado no Spotify."
          link="https://github.com/HigorStos/bootstrap_musicfy"
        />
      </li>
      <li>
        <Projeto
          titulo="CineX"
          descricao="Liderei uma equipe da faculdade na construção de um sistema para atendentes de bilheteria."
          link="https://github.com/HigorStos/java_cinex"
        />
      </li>
      <li>
        <Projeto
          titulo="Birthday Counter"
          descricao="Página com contador até o meu aniversário, projeto de conclusão de módulo na EBAC."
          link="https://github.com/HigorStos/js_birthday_counter"
        />
      </li>
      <li>
        <Projeto
          titulo="EBAC Tech Talks"
          descricao="Página sobre um evento da EBAC, realizado em aula."
          link="https://github.com/HigorStos/js_ebac_tech_talks"
        />
      </li>
      <li>
        <Projeto
          titulo="Calculadora de Médias Escolares"
          descricao="Calculadora de Médias Escolares, realizado em aula na EBAC."
          link="https://github.com/HigorStos/js_calculadora_medias"
        />
      </li>
      <li>
        <Projeto
          titulo="Avatar: O Caminho da Água"
          descricao="Landing page do filme Avatar: O Caminho da Água."
          link="https://github.com/HigorStos/css_landing_avatar"
        />
      </li>
      <li>
        <Projeto
          titulo="Super Mario Bros"
          descricao="Landing page do filme Super Mario Bros."
          link="https://github.com/HigorStos/css_landing_mario"
        />
      </li>
      <li>
        <Projeto
          titulo="AirBnb Layout"
          descricao="Clone do layout do airbnb."
          link="https://github.com/HigorStos/css_airbnb"
        />
      </li>
    </Lista>
  </section>
)

export default Projetos
