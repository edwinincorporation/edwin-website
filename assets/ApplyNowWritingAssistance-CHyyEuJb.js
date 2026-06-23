import{r as a,j as e,ag as w,ah as c,g as x,x as y,R as h,q as p,z as d,P as N,X as A,at as B,au as F,m as u,as as C,f as E}from"./index-DQUWwUcN.js";import{m}from"./proxy-B6uMfQFQ.js";const r=[{image:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200",title:"Expert PhD Assistance",subtitle:"Transform your research journey with professional guidance"},{image:"https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=1200",title:"Academic Excellence",subtitle:"Comprehensive support from proposal to thesis submission"},{image:"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200",title:"Research Made Easy",subtitle:"Expert guidance for papers, projects and dissertations"}],S=[{icon:e.jsx(B,{className:"w-8 h-8"}),title:"Paper Writing Assistant",description:"Expert guidance for research papers, dissertations, and academic manuscripts with plagiarism-free content.",color:"#C89B3C"},{icon:e.jsx(F,{className:"w-8 h-8"}),title:"Major Minor Project Support",description:"Comprehensive assistance for major and minor projects across all disciplines and academic levels.",color:"#1B3A6B"},{icon:e.jsx(u,{className:"w-8 h-8"}),title:"Synopsis Writing",description:"Professional synopsis and proposal writing to help you get your research approved faster.",color:"#2ECC71"}],k=[{name:"Dr. Priya Sharma",role:"PhD Scholar, IIT Delhi",text:"Edwin Incorporation made my PhD journey smooth and successful. Their research guidance was exceptional.",rating:5},{name:"Prof. Amit Patel",role:"Research Supervisor",text:"Professional, responsive, and incredibly knowledgeable. They helped my students with excellent thesis writing.",rating:5},{name:"Rahul Verma",role:"PhD Candidate",text:"Their synopsis writing service helped me get my research approved in the first attempt. Highly recommended!",rating:5}],P=[{text:"Personalized research guidance for every scholar",icon:e.jsx(p,{})},{text:"Professional thesis & dissertation writing",icon:e.jsx(u,{})},{text:"Plagiarism-free academic content guaranteed",icon:e.jsx(h,{})},{text:"Expert support for research methodology",icon:e.jsx(x,{})},{text:"Timely delivery of academic projects",icon:e.jsx(C,{})},{text:"Continuous support throughout your PhD journey",icon:e.jsx(E,{})}],O=()=>{const[D,I]=a.useState(""),[z,R]=a.useState(null),[Y,L]=a.useState(!1),[U,W]=a.useState(!1),[i,o]=a.useState(0),[l,n]=a.useState(null),[b,f]=a.useState(0);a.useEffect(()=>{const t=setInterval(()=>{o(s=>(s+1)%r.length)},5e3);return()=>clearInterval(t)},[]),a.useEffect(()=>{const t=()=>f(window.scrollY);return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]);const g=()=>{o(t=>(t+1)%r.length)},v=()=>{o(t=>(t-1+r.length)%r.length)};return e.jsxs("div",{className:"font-['Plus_Jakarta_Sans',sans-serif] bg-white min-h-screen",children:[e.jsx("style",{children:`
          

          * {
            font-family: 'Plus Jakarta Sans', sans-serif;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out;
          }

          .animate-slideInLeft {
            animation: slideInLeft 0.8s ease-out;
          }

          .animate-slideInRight {
            animation: slideInRight 0.8s ease-out;
          }

          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .hover-lift:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(27, 58, 107, 0.15);
          }

          .hover-scale {
            transition: transform 0.3s ease;
          }

          .hover-scale:hover {
            transform: scale(1.05);
          }

          .hover-glow:hover {
            box-shadow: 0 0 30px rgba(200, 155, 60, 0.3);
          }

          .shimmer {
            background: linear-gradient(90deg, 
              transparent 0%, 
              rgba(255,255,255,0.2) 50%, 
              transparent 100%
            );
            background-size: 1000px 100%;
            animation: shimmer 2s infinite;
          }

          .card-hover-effect {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .card-hover-effect::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent 0%, 
              rgba(200, 155, 60, 0.1) 50%, 
              transparent 100%
            );
            transition: left 0.6s ease;
          }

          .card-hover-effect:hover::before {
            left: 100%;
          }

          .card-hover-effect:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(27, 58, 107, 0.2);
            border-color: #C89B3C;
          }
        `}),e.jsx("section",{className:"relative h-screen bg-white overflow-hidden",children:e.jsxs("div",{className:"relative h-full",children:[r.map((t,s)=>e.jsxs("div",{className:`absolute inset-0 transition-all duration-1000 ease-in-out ${s===i?"opacity-100":"opacity-0"}`,children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(${t.image})`,transform:`scale(1.1) translateY(${b*.2}px)`,transition:"transform 0.1s ease-out"}}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/90 to-[#1B3A6B]/60"}),e.jsx("div",{className:"absolute inset-0 bg-black/20"})]},s)),e.jsx("button",{onClick:v,className:"absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#C89B3C] transition-all duration-300 border border-white/20 hover:scale-110",children:e.jsx(w,{className:"text-xl"})}),e.jsx("button",{onClick:g,className:"absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#C89B3C] transition-all duration-300 border border-white/20 hover:scale-110",children:e.jsx(c,{className:"text-xl"})}),e.jsx("div",{className:"relative z-20 flex items-center h-full max-w-[1200px] mx-auto px-5",children:e.jsxs("div",{className:"lg:w-1/2",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white text-sm font-medium mb-6 hover:bg-white/20 transition-all duration-300",children:[e.jsx(x,{className:"animate-pulse"}),"PhD Assistance Services"]}),e.jsx("h1",{className:"text-5xl lg:text-6xl font-bold text-white leading-tight animate-fadeInUp",children:r[i].title}),e.jsx("p",{className:"text-xl text-gray-200 mt-6 max-w-xl animate-fadeInUp",children:r[i].subtitle}),e.jsx("p",{className:"text-lg text-gray-300 mt-4 max-w-xl animate-fadeInUp",children:"Get expert guidance for your doctoral journey — from research proposal to final thesis submission"}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-8 animate-fadeInUp",children:[e.jsx("button",{className:"bg-[#C89B3C] hover:bg-[#A67B2E] transition-all duration-300 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#C89B3C]/20 hover-lift",children:"Start Your Application"}),e.jsx("button",{className:"border-2 border-white text-white hover:bg-white hover:text-[#1B3A6B] transition-all duration-300 px-8 py-4 rounded-lg font-semibold backdrop-blur-sm hover-lift",children:"View Services"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-12 animate-fadeInUp",children:[e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300",children:[e.jsx("h3",{className:"text-3xl font-bold text-white",children:"500+"}),e.jsx("p",{className:"text-sm text-gray-300 mt-1",children:"PhD Scholars"})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300",children:[e.jsx("h3",{className:"text-3xl font-bold text-white",children:"98%"}),e.jsx("p",{className:"text-sm text-gray-300 mt-1",children:"Success Rate"})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300",children:[e.jsx("h3",{className:"text-3xl font-bold text-white",children:"10+"}),e.jsx("p",{className:"text-sm text-gray-300 mt-1",children:"Years Exp."})]})]})]})}),e.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3",children:r.map((t,s)=>e.jsx("button",{onClick:()=>o(s),className:`w-12 h-1 rounded-full transition-all duration-300 ${s===i?"bg-[#C89B3C] w-16":"bg-white/50 hover:bg-white"}`},s))})]})}),e.jsx("section",{className:"bg-gradient-to-b from-white to-[#EAF1FB] py-20 px-5",children:e.jsxs("div",{className:"max-w-[1200px] mx-auto",children:[e.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-[#EAF1FB] border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4",children:[e.jsx(y,{}),"Our Services"]}),e.jsx("h2",{className:"text-4xl font-bold text-[#1B3A6B]",children:"Our Academic Services"}),e.jsx("p",{className:"text-[15px] leading-[1.8] text-[#5A6A85] mt-4",children:"Comprehensive PhD assistance designed to support your academic journey"})]}),e.jsx("div",{className:"grid md:grid-cols-3 gap-8 mt-14",children:S.map((t,s)=>e.jsxs(m.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.4,delay:s*.1},viewport:{once:!0},className:"card-hover-effect bg-white rounded-2xl border border-[#D6E0F0] p-8",onMouseEnter:()=>n(s),onMouseLeave:()=>n(null),children:[e.jsx("div",{className:"w-20 h-20 rounded-2xl flex items-center justify-center text-4xl transition-all duration-300",style:{backgroundColor:l===s?t.color:"#EAF1FB",color:l===s?"white":t.color,transform:l===s?"rotate(5deg) scale(1.1)":"rotate(0deg)"},children:t.icon}),e.jsx("h3",{className:"text-[22px] font-semibold text-[#1A1A2E] mt-6",children:t.title}),e.jsx("p",{className:"text-[15px] leading-[1.8] text-[#5A6A85] mt-4",children:t.description}),e.jsxs("button",{className:"mt-6 flex items-center gap-2 text-[#1B3A6B] hover:text-[#C89B3C] transition-all duration-300 font-medium group",children:["Learn More"," ",e.jsx(c,{className:"group-hover:translate-x-2 transition-transform duration-300"})]})]},s))})]})}),e.jsx("section",{className:"bg-white py-20 px-5",children:e.jsxs("div",{className:"max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center",children:[e.jsxs("div",{className:"animate-slideInLeft",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-[#EAF1FB] border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4",children:[e.jsx(h,{}),"Why Choose Us"]}),e.jsx("h2",{className:"text-4xl font-bold text-[#1B3A6B] leading-tight",children:"Why Choose Our PhD Assistance?"}),e.jsx("p",{className:"text-[15px] leading-[1.8] text-[#5A6A85] mt-5",children:"We provide comprehensive academic support to help you navigate every stage of your doctoral journey successfully."}),e.jsx("div",{className:"grid gap-4 mt-8",children:P.map((t,s)=>e.jsxs("div",{className:"hover-lift bg-[#EAF1FB] border border-[#D6E0F0] rounded-xl p-5 flex items-start gap-4 group cursor-pointer",children:[e.jsx("div",{className:"text-[#C89B3C] text-xl mt-1 group-hover:scale-125 transition-transform duration-300",children:t.icon}),e.jsx("p",{className:"text-[15px] leading-[1.7] text-[#1A1A2E] font-medium",children:t.text})]},s))})]}),e.jsxs("div",{className:"animate-slideInRight bg-gradient-to-br from-[#1B3A6B] to-[#2C5F8A] rounded-[24px] p-10 text-white relative overflow-hidden hover-glow transition-shadow duration-300",children:[e.jsx("div",{className:"absolute -top-20 -right-20 w-52 h-52 bg-[#C89B3C] rounded-full opacity-20 animate-pulse"}),e.jsx("div",{className:"absolute -bottom-20 -left-20 w-52 h-52 bg-[#C89B3C] rounded-full opacity-10"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/20",children:[e.jsx(p,{className:"text-[#C89B3C]"}),"Trusted Academic Experts"]}),e.jsx("h3",{className:"text-3xl font-bold mt-6 leading-snug",children:"Helping Scholars Achieve Academic Excellence"}),e.jsx("p",{className:"text-[#D6E0F0] text-[15px] leading-[1.8] mt-5",children:"Our team of PhD experts focuses on delivering high-quality research support, ensuring your academic success."}),e.jsxs("div",{className:"grid grid-cols-2 gap-5 mt-10",children:[e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300",children:[e.jsx("h4",{className:"text-3xl font-bold",children:"10+"}),e.jsx("p",{className:"text-sm text-[#D6E0F0] mt-2",children:"Years Experience"})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300",children:[e.jsx("h4",{className:"text-3xl font-bold",children:"24/7"}),e.jsx("p",{className:"text-sm text-[#D6E0F0] mt-2",children:"Academic Support"})]})]})]})]})]})}),e.jsx("section",{className:"bg-white py-20 px-5",children:e.jsxs("div",{className:"max-w-[1200px] mx-auto",children:[e.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-[#EAF1FB] border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4",children:[e.jsx(d,{className:"text-[#C89B3C]"}),"Testimonials"]}),e.jsx("h2",{className:"text-4xl font-bold text-[#1B3A6B]",children:"What Our Scholars Say"}),e.jsx("p",{className:"text-[15px] leading-[1.8] text-[#5A6A85] mt-4",children:"Hear from PhD scholars who successfully completed their research with our support."})]}),e.jsx("div",{className:"grid lg:grid-cols-3 gap-8 mt-14",children:k.map((t,s)=>e.jsxs(m.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.4,delay:s*.1},viewport:{once:!0},className:"hover-lift bg-gradient-to-b from-[#EAF1FB] to-white rounded-2xl border border-[#D6E0F0] p-8 relative",children:[e.jsx(N,{className:"text-4xl text-[#C89B3C] opacity-50 mb-4"}),e.jsxs("p",{className:"text-[15px] leading-[1.8] text-[#5A6A85] italic",children:['"',t.text,'"']}),e.jsx("div",{className:"flex items-center gap-1 mt-4",children:[...Array(t.rating)].map((T,j)=>e.jsx(d,{className:"text-[#C89B3C]"},j))}),e.jsxs("div",{className:"border-t border-[#D6E0F0] mt-6 pt-4",children:[e.jsx("h4",{className:"font-semibold text-[#1B3A6B]",children:t.name}),e.jsx("p",{className:"text-sm text-[#5A6A85]",children:t.role})]})]},s))})]})}),e.jsx("section",{id:"writing-assistance-form",className:"relative py-12 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden",children:e.jsxs("div",{className:"max-w-3xl mx-auto px-4 relative z-10",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-white border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-semibold mb-4 shadow-sm",children:[e.jsx(A,{}),"Application Form"]}),e.jsx("h2",{className:"text-4xl font-bold text-[#1B3A6B]",children:"Apply for Projects"}),e.jsx("p",{className:"text-[16px] leading-[1.7] text-[#5A6A85] mt-3 max-w-xl mx-auto",children:"Complete the application form below. Our team will contact you shortly."})]}),e.jsxs("div",{className:"rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden max-w-[650px] mx-auto",children:[e.jsx("div",{className:"bg-gradient-to-r from-[#1B3A6B] to-[#2C5F8A] px-6 py-4",children:e.jsx("h3",{className:"text-white text-xl font-bold",children:"Application Form"})}),e.jsx("div",{className:"w-full flex justify-center bg-white",children:e.jsx("iframe",{title:"Zoho CRM Web Form",src:"https://crm.zoho.in/crm/WebFormServeServlet?rid=a531f32547fa4dc8c10ed9b84d5e7884d5992f22435685e04ce37a2f0265c6381cadc6834824cc5d49cf3fcf8a81b3a4gid3a9a5f833a623ec528c2516db64a6696d1edb448afba3af3d7b0ca901b85a48f",width:"610",height:"500",frameBorder:"0",scrolling:"yes",style:{border:"none",maxWidth:"100%",display:"block"}})})]})]})})]})};export{O as default};
