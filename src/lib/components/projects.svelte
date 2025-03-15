<script>
  import ProjectCard from "./project-card.svelte";

</script>
<section class="p-6 lg:p-20 py-20 text-white" id="projects">
  <div class="md:flex-row flex flex-col gap-10 items-center w-full py-10">
    <h2 class="text-[39px] font-bold w-full md:w-1/2 text-center md:text-left">
      Some Projects I have worked on
    </h2>
    <div class="text-sm text-center md:text-left hover:text-white w-full md:w-1/2 text-white opacity-90">
      <p>
        I have worked on a number of projects, ranging from web development to
        blockchain technology. Here are some of the projects I have worked on.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 py-20 md:py-10">
    <a href="https://www.swiftvote.io/" target="_blank">
      <ProjectCard image="/images/swiftvote.png" title="Swiftvote" content="A platform that allows you to host and participate in elections, integrated into blockchain technology to ensure end-to-end verifiability, transparency and safety" link="https://www.swiftvote.io/"/>
    </a>
    <a href="https://yoamart.com/" target="_blank">
      <ProjectCard image="/images/yoa.png" title="Yoamart" content="Online grocery shopping center-- Bringing you a seamless shopping experience for every need—online or in-store." link="https://yoamart.com/"/>
    </a>
    <a href="https://www.immigrationservicesonbudget.com/" target="_blank">
      <ProjectCard image="/images/isob.png" title="Immigration Service On Budget" content="At Immigration Services on Budget, we are committed to helping you realize your dream of immigrating to Canada without breaking the bank. " link="https://www.immigrationservicesonbudget.com/"/>
    </a>
    <a href="https://www.cloudpaddie.com" target="_blank">
      <ProjectCard image="/images/cloudpaddie.png" title="Cloudpaddie" content="Cloud Paddie is home to experienced and thoroughly vetted cloud talents. We provide you with the most qualified professionals to bring your project to its desired conclusion. " link="https://www.cloudpaddie.com"/>
    </a>
    <!-- <a href="https://techprojectonbudget.com" target="_blank">
      <ProjectCard image="/images/tpob.png" title="Tech Project On Budget" content="Tech Project On Budget is a full-service IT consulting firm that provides a wide range of IT services to businesses of all sizes. " link="https://techprojectonbudget.com"/>
    </a> -->
    <a href="https://devjay-portfolio.pages.dev/" target="_blank">
      <ProjectCard image="/images/portfolio.png" title="Devjay Portfolio" content="Devjay Portfolio is a portfolio website that showcases my work and skills. It is built using Svelte and Tailwind CSS." link="https://devjay-portfolio.pageable.io/"/>
    </a>
    <a href="https://ucchain.org/" target="_blank">
      <ProjectCard image="/images/ucc.png" title="Universe Chain" content="Universe Chain is a blockchain development company that specializes in creating custom blockchain solutions for businesses of all sizes. " link="https://ucchain.org/"/>
    </a>
  </div>
</section>
