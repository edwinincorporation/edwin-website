import{r as i,j as e,ag as N,ah as B,ar as y,x as d,h,R as b,q as c,as as A,z as p,P as F,X as l,g as E,ac as x,f as C,a3 as S}from"./index-DQUWwUcN.js";const a=[{image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",title:"Your American Dream Starts Here",subtitle:"Expert guidance for extraordinary professionals"},{image:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",title:"EB-1 Visa Specialists",subtitle:"Tailored solutions for exceptional achievements"},{image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",title:"Proven Success Rate",subtitle:"Building strong petitions for global talent"}],k=[{title:"EB-1A (Extraordinary Ability)",description:"Designed for individuals with extraordinary achievements in arts, sciences, education, business, or athletics. We help prepare strong petitions with complete documentation support.",icon:e.jsx(d,{}),color:"#C89B3C"},{title:"EB-1B (Outstanding Professors & Researchers)",description:"We assist professors and researchers in preparing evidence of academic excellence, publications, citations, and research contributions for successful EB-1B petitions.",icon:e.jsx(E,{}),color:"#1B3A6B"},{title:"EB-1C (Executives & Managers)",description:"Professional immigration support for multinational executives and managers seeking permanent residency opportunities in the United States.",icon:e.jsx(x,{}),color:"#2ECC71"}],I=[{text:"Personalized immigration guidance for every applicant",icon:e.jsx(c,{})},{text:"Professional documentation & petition preparation",icon:e.jsx(l,{})},{text:"Expert support for USCIS filing requirements",icon:e.jsx(b,{})},{text:"Dedicated consultation from experienced specialists",icon:e.jsx(x,{})},{text:"Strong approval-focused application strategy",icon:e.jsx(d,{})},{text:"Continuous support throughout the visa process",icon:e.jsx(C,{})}],u=[{step:"01",title:"Consultation",description:"We analyze your eligibility and identify the best EB-1 visa category for your profile.",icon:e.jsx(x,{})},{step:"02",title:"Documentation",description:"Our team helps collect achievements, publications, awards, and supporting evidence.",icon:e.jsx(l,{})},{step:"03",title:"Petition Filing",description:"We professionally prepare and submit your petition to USCIS with complete guidance.",icon:e.jsx(S,{})},{step:"04",title:"Approval Support",description:"We stay connected until final approval and provide updates throughout the process.",icon:e.jsx(c,{})}],D=[{name:"Dr. Sarah Johnson",role:"Research Scientist",text:"Edwin Incorporation made my EB-1A application seamless. Their attention to detail and expertise was outstanding.",rating:5},{name:"Michael Chen",role:"Senior Executive",text:"Professional, responsive, and incredibly knowledgeable. They guided me through every step of my EB-1C process.",rating:5},{name:"Prof. Robert Williams",role:"University Professor",text:"Their understanding of EB-1B requirements for academics is unparalleled. Highly recommended for researchers.",rating:5}];function P(){const[r,o]=i.useState(0),[n,m]=i.useState(null),[g,f]=i.useState(0);i.useEffect(()=>{const t=setInterval(()=>{o(s=>(s+1)%a.length)},5e3);return()=>clearInterval(t)},[]),i.useEffect(()=>{const t=()=>f(window.scrollY);return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]);const v=()=>{o(t=>(t+1)%a.length)},j=()=>{o(t=>(t-1+a.length)%a.length)};return e.jsxs("div",{className:"w-full bg-white overflow-hidden",children:[e.jsx("style",{children:`
          

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

          .hover-glow:hover {
            box-shadow: 0 0 30px rgba(200, 155, 60, 0.3);
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
        `}),e.jsx("section",{className:"relative h-screen bg-white overflow-hidden",children:e.jsxs("div",{className:"relative h-full",children:[a.map((t,s)=>e.jsxs("div",{className:`absolute inset-0 transition-all duration-1000 ease-in-out ${s===r?"opacity-100":"opacity-0"}`,children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-center",style:{backgroundImage:`url(${t.image})`,transform:`scale(1.1) translateY(${g*.2}px)`,transition:"transform 0.1s ease-out"}}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/90 to-[#1B3A6B]/60"}),e.jsx("div",{className:"absolute inset-0 bg-black/20"})]},s)),e.jsx("button",{onClick:j,className:"absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#C89B3C] transition-all duration-300 border border-white/20",children:e.jsx(N,{className:"text-xl"})}),e.jsx("button",{onClick:v,className:"absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#C89B3C] transition-all duration-300 border border-white/20",children:e.jsx(B,{className:"text-xl"})}),e.jsx("div",{className:"relative z-20 flex items-center h-full max-w-[1200px] mx-auto px-5",children:e.jsxs("div",{className:"lg:w-1/2",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white text-sm font-medium mb-6 hover:bg-white/20 transition-all duration-300",children:[e.jsx(y,{className:"animate-pulse"}),"EB-1 Immigration Services"]}),e.jsx("h1",{className:"text-5xl lg:text-6xl font-bold text-white leading-tight animate-fadeInUp",children:a[r].title}),e.jsx("p",{className:"text-xl text-gray-200 mt-6 max-w-xl animate-fadeInUp",children:a[r].subtitle}),e.jsx("p",{className:"text-lg text-gray-300 mt-4 max-w-xl animate-fadeInUp",children:"Edwin Incorporation specializes in EB-1A, EB-1B, and EB-1C visa solutions for extraordinary professionals seeking permanent residency in the United States."}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-8 animate-fadeInUp",children:[e.jsx("button",{className:"bg-[#C89B3C] hover:bg-[#A67B2E] transition-all duration-300 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#C89B3C]/20 hover-lift",children:"Apply For Visa"}),e.jsx("button",{className:"border-2 border-white text-white hover:bg-white hover:text-[#1B3A6B] transition-all duration-300 px-8 py-4 rounded-lg font-semibold backdrop-blur-sm hover-lift",children:"Book Consultation"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-12 animate-fadeInUp",children:[e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300",children:[e.jsx("h3",{className:"text-3xl font-bold text-white",children:"500+"}),e.jsx("p",{className:"text-sm text-gray-300 mt-1",children:"Consultations"})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300",children:[e.jsx("h3",{className:"text-3xl font-bold text-white",children:"98%"}),e.jsx("p",{className:"text-sm text-gray-300 mt-1",children:"Satisfaction"})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300",children:[e.jsx("h3",{className:"text-3xl font-bold text-white",children:"10+"}),e.jsx("p",{className:"text-sm text-gray-300 mt-1",children:"Years Exp."})]})]})]})}),e.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3",children:a.map((t,s)=>e.jsx("button",{onClick:()=>o(s),className:`w-12 h-1 rounded-full transition-all duration-300 ${s===r?"bg-[#C89B3C] w-16":"bg-white/50 hover:bg-white"}`},s))})]})}),e.jsx("section",{className:"bg-gradient-to-b from-white to-[#EAF1FB] py-20 px-5",children:e.jsxs("div",{className:"max-w-[1200px] mx-auto",children:[e.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-[#EAF1FB] border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4",children:[e.jsx(d,{}),"Our Services"]}),e.jsx("h2",{className:"text-4xl font-bold text-[#1B3A6B]",children:"Our EB-1 Visa Categories"}),e.jsx("p",{className:"text-[15px] leading-[1.8] text-[#5A6A85] mt-4",children:"Professional immigration support designed to help extraordinary individuals and executives achieve permanent residency in the United States."})]}),e.jsx("div",{className:"grid lg:grid-cols-3 gap-8 mt-14",children:k.map((t,s)=>e.jsxs("div",{className:"card-hover-effect bg-white rounded-2xl border border-[#D6E0F0] p-8",onMouseEnter:()=>m(s),onMouseLeave:()=>m(null),children:[e.jsx("div",{className:"w-20 h-20 rounded-2xl flex items-center justify-center text-4xl transition-all duration-300",style:{backgroundColor:n===s?t.color:"#EAF1FB",color:n===s?"white":t.color,transform:n===s?"rotate(5deg) scale(1.1)":"rotate(0deg)"},children:t.icon}),e.jsx("h3",{className:"text-[22px] font-semibold text-[#1A1A2E] mt-6",children:t.title}),e.jsx("p",{className:"text-[15px] leading-[1.8] text-[#5A6A85] mt-4",children:t.description}),e.jsxs("button",{className:"mt-6 flex items-center gap-2 text-[#1B3A6B] hover:text-[#C89B3C] transition-all duration-300 font-medium group",children:["Learn More",e.jsx(h,{className:"group-hover:translate-x-2 transition-transform duration-300"})]})]},s))})]})}),e.jsx("section",{className:"bg-white py-20 px-5",children:e.jsxs("div",{className:"max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center",children:[e.jsxs("div",{className:"animate-slideInLeft",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-[#EAF1FB] border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4",children:[e.jsx(b,{}),"Why Choose Us"]}),e.jsx("h2",{className:"text-4xl font-bold text-[#1B3A6B] leading-tight",children:"Why Choose Edwin Incorporation?"}),e.jsx("p",{className:"text-[15px] leading-[1.8] text-[#5A6A85] mt-5",children:"We simplify complex immigration procedures with strategic consultation, documentation assistance, and personalized support throughout the EB-1 visa process."}),e.jsx("div",{className:"grid gap-4 mt-8",children:I.map((t,s)=>e.jsxs("div",{className:"hover-lift bg-[#EAF1FB] border border-[#D6E0F0] rounded-xl p-5 flex items-start gap-4 group cursor-pointer",children:[e.jsx("div",{className:"text-[#C89B3C] text-xl mt-1 group-hover:scale-125 transition-transform duration-300",children:t.icon}),e.jsx("p",{className:"text-[15px] leading-[1.7] text-[#1A1A2E] font-medium",children:t.text})]},s))})]}),e.jsxs("div",{className:"animate-slideInRight bg-gradient-to-br from-[#1B3A6B] to-[#2C5F8A] rounded-[24px] p-10 text-white relative overflow-hidden hover-glow transition-shadow duration-300",children:[e.jsx("div",{className:"absolute -top-20 -right-20 w-52 h-52 bg-[#C89B3C] rounded-full opacity-20 animate-pulse"}),e.jsx("div",{className:"absolute -bottom-20 -left-20 w-52 h-52 bg-[#C89B3C] rounded-full opacity-10"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/20",children:[e.jsx(c,{className:"text-[#C89B3C]"}),"Trusted Immigration Experts"]}),e.jsx("h3",{className:"text-3xl font-bold mt-6 leading-snug",children:"Helping Professionals Build Their Future In The USA"}),e.jsx("p",{className:"text-[#D6E0F0] text-[15px] leading-[1.8] mt-5",children:"Our team focuses on building strong EB-1 petitions through proper documentation, eligibility analysis, and immigration consultation support."}),e.jsxs("div",{className:"grid grid-cols-2 gap-5 mt-10",children:[e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300",children:[e.jsx("h4",{className:"text-3xl font-bold",children:"10+"}),e.jsx("p",{className:"text-sm text-[#D6E0F0] mt-2",children:"Years Experience"})]}),e.jsxs("div",{className:"bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300",children:[e.jsx("h4",{className:"text-3xl font-bold",children:"24/7"}),e.jsx("p",{className:"text-sm text-[#D6E0F0] mt-2",children:"Consultation Support"})]})]})]})]})]})}),e.jsx("section",{className:"bg-[#EAF1FB] py-20 px-5",children:e.jsxs("div",{className:"max-w-[1200px] mx-auto",children:[e.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-white border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4",children:[e.jsx(A,{}),"Our Process"]}),e.jsx("h2",{className:"text-4xl font-bold text-[#1B3A6B]",children:"Our Immigration Process"}),e.jsx("p",{className:"text-[15px] leading-[1.8] text-[#5A6A85] mt-4",children:"A structured and transparent process to guide you from consultation to visa approval."})]}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14",children:u.map((t,s)=>e.jsxs("div",{className:"card-hover-effect relative bg-white rounded-2xl border border-[#D6E0F0] p-7",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#2C5F8A] text-white flex items-center justify-center text-2xl shadow-lg",children:t.icon}),e.jsx("span",{className:"text-4xl font-bold text-[#EAF1FB]",children:t.step})]}),e.jsx("h3",{className:"text-[20px] font-semibold text-[#1A1A2E]",children:t.title}),e.jsx("p",{className:"text-[15px] leading-[1.8] text-[#5A6A85] mt-4",children:t.description}),s<u.length-1&&e.jsx("div",{className:"hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-[#C89B3C] text-2xl",children:e.jsx(h,{})})]},s))})]})}),e.jsx("section",{className:"bg-white py-20 px-5",children:e.jsxs("div",{className:"max-w-[1200px] mx-auto",children:[e.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-[#EAF1FB] border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-medium mb-4",children:[e.jsx(p,{className:"text-[#C89B3C]"}),"Testimonials"]}),e.jsx("h2",{className:"text-4xl font-bold text-[#1B3A6B]",children:"What Our Clients Say"}),e.jsx("p",{className:"text-[15px] leading-[1.8] text-[#5A6A85] mt-4",children:"Hear from professionals who successfully obtained their EB-1 visas with our support."})]}),e.jsx("div",{className:"grid lg:grid-cols-3 gap-8 mt-14",children:D.map((t,s)=>e.jsxs("div",{className:"hover-lift bg-gradient-to-b from-[#EAF1FB] to-white rounded-2xl border border-[#D6E0F0] p-8 relative",children:[e.jsx(F,{className:"text-4xl text-[#C89B3C] opacity-50 mb-4"}),e.jsxs("p",{className:"text-[15px] leading-[1.8] text-[#5A6A85] italic",children:['"',t.text,'"']}),e.jsx("div",{className:"flex items-center gap-1 mt-4",children:[...Array(t.rating)].map((U,w)=>e.jsx(p,{className:"text-[#C89B3C]"},w))}),e.jsxs("div",{className:"border-t border-[#D6E0F0] mt-6 pt-4",children:[e.jsx("h4",{className:"font-semibold text-[#1B3A6B]",children:t.name}),e.jsx("p",{className:"text-sm text-[#5A6A85]",children:t.role})]})]},s))})]})}),e.jsx("section",{className:"relative py-12 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden",children:e.jsxs("div",{className:"max-w-5xl mx-auto px-4 relative z-10",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-white border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-semibold mb-4 shadow-sm",children:[e.jsx(l,{}),"Apply Now"]}),e.jsx("h2",{className:"text-4xl font-bold text-[#1B3A6B]",children:"EB-1 Visa Application Form"}),e.jsx("p",{className:"text-[16px] leading-[1.7] text-[#5A6A85] mt-3 max-w-2xl mx-auto",children:"Complete the application form below. Our team will contact you shortly."})]}),e.jsxs("div",{className:"rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden",children:[e.jsx("div",{className:"bg-gradient-to-r from-[#1B3A6B] to-[#2C5F8A] px-6 py-4",children:e.jsx("h3",{className:"text-white text-xl font-bold",children:"Application Form"})}),e.jsx("iframe",{title:"Zoho CRM Web Form",src:"https://crm.zoho.in/crm/WebFormServeServlet?rid=10e82c0d7b54cdc93e2c4e476d74423cae8a64561dde736ea4b44cd5b4d8085059881b5df68554605c26d79d17a3fa3agid24da6f4d0b762ddad1244ca9337e302ee419f08e17e8fd762e758e6bd82d53d2",width:"100%",height:"430",frameBorder:"0",scrolling:"yes",style:{border:"none",width:"100%",display:"block"}})]})]})}),e.jsx("section",{className:"relative py-12 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EAF1FB] overflow-hidden",children:e.jsxs("div",{className:"max-w-5xl mx-auto px-4 relative z-10",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-white border border-[#D6E0F0] px-5 py-2 rounded-full text-[#1B3A6B] text-sm font-semibold mb-4 shadow-sm",children:[e.jsx(l,{}),"Apply Now"]}),e.jsx("h2",{className:"text-4xl font-bold text-[#1B3A6B]",children:"Passport Application Form"}),e.jsx("p",{className:"text-[16px] leading-[1.7] text-[#5A6A85] mt-3 max-w-2xl mx-auto",children:"Complete the application form below. Our team will contact you shortly."})]}),e.jsxs("div",{className:"rounded-[24px] bg-white shadow-xl border border-[#D6E0F0] overflow-hidden",children:[e.jsx("div",{className:"bg-gradient-to-r from-[#1B3A6B] to-[#2C5F8A] px-6 py-4",children:e.jsx("h3",{className:"text-white text-xl font-bold",children:"Application Form"})}),e.jsx("iframe",{title:"Zoho CRM Web Form",src:"https://crm.zoho.in/crm/WebFormServeServlet?rid=9bde249f47bc02c54a880a78c2d48660131e55177f6bec2fe69fd2c5e83a2ef8a21ada5cfc06bc6722947f8f69ba83c4gid9cf07970b6726da6e7abfcf2e93b3c8cd535041dbb6d19729e7caf941af37dc9",width:"100%",height:"520",frameBorder:"0",scrolling:"yes",style:{border:"none",width:"100%",display:"block"}})]})]})})]})}export{P as default};
