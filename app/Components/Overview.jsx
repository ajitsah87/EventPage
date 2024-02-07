import Image from "next/image";
import React from "react";
import Meeting from "@/public/assets/Meeting.png"

function Overview() {
  return (
    <>
      <div className=" mx-20 mb-32">
        <h1 className="text-4xl text-center font-semibold text-[#4E4E4E] my-24 mb-24">
         OVERVIEW
        </h1>
        <p className="text-lg text-black md:mx-12 mx-2">
          Your mouth serves as a mirror reflecting your overall bodily health. We place immense emphasis on personal hygiene, physical presentation, and self-presentation in our daily lives.
        </p>
       <div className="flex gap-8 h-full flex-col-reverse lg:flex-row items-center"> <div className="mai1 flex-1  ">
          <h3 className="text-2xl font-semibold my-8 ">Key Information</h3>
          <div>
            <ol className="list-decimal list-outside mx-12  ">
              <li >
                Oral-Systemic Connection: The health of your mouth is
                interconnected with your body's overall health. Conditions like
                gum disease have been linked to systemic issues such as heart
                disease and diabetes.
              </li>
              <li>
                Preventive Dental Care: Regular dental check-ups, cleanings, and
                proper oral hygiene are essential for preventing oral health
                issues and maintaining a healthy smile.
              </li>
              <li>
                Nutrition and Oral Health: A balanced diet rich in nutrients
                contributes to strong teeth and gums. It's vital to avoid
                excessive sugar and acidic foods that can harm your oral health.
              </li>
              <li>
                Oral Hygiene Practices: Brushing, flossing, and using mouthwash
                daily are simple yet effective practices that promote good oral
                health.
              </li>
              <li>
                Lifestyle Habits: Smoking and excessive alcohol consumption can
                harm oral health. Avoiding these habits is beneficial not only
                for your mouth but for your overall well-being.
              </li>
              <li>
                Holistic Approach: Taking care of your oral health is an
                integral part of a holistic approach to well-being. It impacts
                not only your physical health but also your self-esteem and
                confidence.
              </li>
              <li>
                Professional Guidance: Consult with dental professionals for
                personalized guidance on maintaining optimal oral health and
                addressing any concerns.
              </li>
            </ol>
          </div>
        </div>
        <div className="mai2 my-12 flex-1  ">
          <Image className="h-[540px] w-[442px]" src={Meeting} alt="meeting" height={440} width={442}/>
        </div></div>
      </div>
    </>
  );
}

export default Overview;
