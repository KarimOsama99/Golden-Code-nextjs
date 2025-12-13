import React, { FC } from "react";
import Image from "next/image";
import blog4 from "@/public/images/blog/blog_details-img03.jpg";
import { Blog } from "@/api/blogs";

interface DescriptionProps {
  blog?: Blog;
}

const Description: FC<DescriptionProps> = ({ blog }) => {
  return (
    <div>
      <h3 className="item_details_info_heading">
        {blog?.sectionHeading || "Optimizing growth with IT infrastructure"}
      </h3>
      <p>
        {blog?.sectionContent ||
          "They provide a comprehensive and in-depth analysis that goes beyond surface-level. Join us as we uncover the secrets of IT solutions, guided by the wisdom and expertise of Golden Code thought leaders."}
      </p>

      <div className="row mb-90 align-items-center mt-none-30">
        <div className="col-md-6 mt-30">
          <div className="image_block">
            <Image src={blog4} alt="Blog" />
          </div>
        </div>
        <div className="col-md-6 mt-30">
          <ul className="iconlist_block">
            {blog?.sectionPoints && blog.sectionPoints.length > 0 ? (
              blog.sectionPoints.map((point, idx) => (
                <li key={idx}>
                  <span className="iconlist_text">{point}</span>
                </li>
              ))
            ) : (
              <>
                <li>
                  <span className="iconlist_text">
                    Unveiling Emerging Technologies.
                  </span>
                </li>
                <li>
                  <span className="iconlist_text">
                    Navigating Complex Challenges.
                  </span>
                </li>
                <li>
                  <span className="iconlist_text">
                    Forecasting Future Trends.
                  </span>
                </li>
                <li>
                  <span className="iconlist_text">
                    Driving Innovation Strategies.
                  </span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <h3 className="item_details_info_heading">
        {blog?.conclusionHeading || "3 Reasons to investing at this moment"}
      </h3>
      <p>
        {blog?.conclusionContent ||
          "Here are three key reasons emphasizing the importance of optimizing ICO infrastructure for efficiency and growth:"}
      </p>
      <ul className="iconlist_block numlist_block list-unstyled">
        {blog?.conclusionPoints && blog.conclusionPoints.length > 0 ? (
          blog.conclusionPoints.map((point, idx) => (
            <li key={idx}>
              <span className="iconlist_text">
                {idx + 1}. {point}
              </span>
            </li>
          ))
        ) : (
          <>
            <li>
              <span className="iconlist_text">
                1. Enhanced Operational Agility.
              </span>
            </li>
            <li>
              <span className="iconlist_text">
                2. Resource Optimization & Cost Efficiency.
              </span>
            </li>
            <li>
              <span className="iconlist_text">
                3. Scalability and Innovation.
              </span>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Description;
