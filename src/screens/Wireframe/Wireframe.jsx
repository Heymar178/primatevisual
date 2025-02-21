import React from "react";

export const Wireframe = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[1935px] relative">
        <img
          className="absolute w-[474px] h-[640px] top-[1095px] left-[71px]"
          alt="Image"
          src="/img/image-6.png"
        />

        <img
          className="absolute w-[85px] h-[113px] top-[60px] left-[1283px]"
          alt="Image"
          src="/img/image-8.png"
        />

        <img
          className="top-[273px] left-[33px] absolute w-[600px] h-0.5"
          alt="Line"
          src="/img/line-2.svg"
        />

        <img
          className="top-[998px] left-[33px] absolute w-[600px] h-0.5"
          alt="Line"
          src="/img/line-3.svg"
        />

        <img
          className="top-[272px] left-[785px] absolute w-[600px] h-0.5"
          alt="Line"
          src="/img/line-2.svg"
        />

        <div className="absolute w-[249px] h-[59px] top-[291px] left-[33px] [font-family:'Cabin_Sketch',Helvetica] font-bold text-[#1d1d1b] text-[40px] text-center tracking-[-1.20px] leading-10">
          How to Use
        </div>

        <div className="absolute w-[286px] h-[106px] top-[302px] left-[737px]">
          <div className="absolute w-[249px] h-[59px] top-0 left-[37px] [font-family:'Cabin_Sketch',Helvetica] font-bold text-[#1d1d1b] text-[40px] text-center tracking-[-1.20px] leading-10">
            Release Notes
          </div>

          <div className="absolute w-[249px] h-[59px] top-[47px] left-0 [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-3xl text-center tracking-[-0.90px] leading-[30px]">
            How It’ll Work
          </div>
        </div>

        <div className="absolute w-[249px] h-[59px] top-[1018px] left-[41px] [font-family:'Cabin_Sketch',Helvetica] font-bold text-[#1d1d1b] text-[40px] text-center tracking-[-1.20px] leading-10">
          EXAMPLE
        </div>

        <div className="absolute w-[105px] h-[29px] top-[408px] left-[766px] [font-family:'ABeeZee',Helvetica] font-normal text-[#1d1d1b] text-xl text-center tracking-[-0.60px] leading-5">
          V0.1.2.0
        </div>

        <div className="absolute w-[105px] h-[29px] top-[880px] left-[774px] [font-family:'ABeeZee',Helvetica] font-normal text-[#1d1d1b] text-xl text-center tracking-[-0.60px] leading-5">
          V0.1.3.0
        </div>

        <p className="absolute w-[534px] h-[59px] top-[437px] left-[749px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          DETECT TAGS: Monitor TikTok for when a user tags your account in a
          comment or caption.
        </p>

        <p className="absolute w-[577px] h-[59px] top-[534px] left-[766px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          PROCESS THE REQUEST: When a tag is detected, extract relevant user
          information (their username or video context) for the drawing
        </p>

        <p className="absolute w-[577px] h-[59px] top-[947px] left-[749px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          Tag Detection Improvements: Fixed an issue where the system
          occasionally missed tags in TikTok comments.
        </p>

        <p className="absolute w-[497px] h-[59px] top-[1035px] left-[775px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          Faster Drawing Delivery: Resolved a delay in processing and sending
          portraits to users.
        </p>

        <p className="absolute w-[535px] h-[59px] top-[1152px] left-[775px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          Caption Analysis Errors: Addressed a bug where captions with emojis or
          special characters caused errors in context recognition
        </p>

        <p className="absolute w-[509px] h-[59px] top-[607px] left-[774px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          Queue the request for the AI system to generate the portrait.
        </p>

        <p className="absolute w-[495px] h-[59px] top-[695px] left-[774px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          GENERATE THE DRAWING: Use a generative AI model, such as Stable
          Diffusion, DALL·E, or a custom-trained neural network, to create the
          portrait.
        </p>

        <p className="absolute w-[534px] h-[59px] top-[792px] left-[759px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
          Include a predefined art style or customization options in the
          generation process.
        </p>

        <p className="absolute w-[432px] h-[25px] top-[366px] left-[-11px] [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px] whitespace-nowrap">
          tag @PrimateVisual on a tiktok post
        </p>

        <div className="absolute w-[583px] h-[154px] top-[391px] left-[33px]">
          <p className="absolute w-[583px] h-[98px] top-0 left-0 [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
            Tag me in a comment or post and ask me to draw you something
          </p>

          <div className="absolute w-[234px] h-[98px] top-14 left-0 [font-family:'Bubblegum_Sans',Helvetica] font-normal text-[#1d1d1b] text-[25px] text-center tracking-[-0.75px] leading-[25px]">
            I&#39;ll reply with a&nbsp;&nbsp;image
          </div>
        </div>

        <img
          className="absolute w-[572px] h-[552px] top-[1249px] left-[769px]"
          alt="Image"
          src="/img/image-11.png"
        />

        <div className="absolute w-[506px] h-[167px] top-[33px] left-10">
          <img
            className="absolute w-[167px] h-[167px] top-0 left-[339px] object-cover"
            alt="Image"
            src="/img/image-12.png"
          />

          <div className="absolute w-[358px] h-[81px] top-[42px] left-0 [text-shadow:0px_4px_4px_#00000040] [font-family:'Cabin_Sketch',Helvetica] font-bold text-[#1d1d1b] text-[50px] text-center tracking-[-1.50px] leading-[50px]">
            PrimateVisual
          </div>
        </div>

        <img
          className="absolute w-[607px] h-[369px] top-[547px] left-[33px]"
          alt="Image"
          src="/img/image-15.png"
        />
      </div>
    </div>
  );
};
