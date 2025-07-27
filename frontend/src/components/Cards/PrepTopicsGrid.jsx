import React from 'react';
import { PREP_TOPICS } from '../../utils/prepTopics';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PrepTopicsGrid = () => {
  const navigate = useNavigate();

  // Group topics by category
  const grouped = PREP_TOPICS.reduce((acc, item) => {
    acc[item.category] = [...(acc[item.category] || []), item];
    return acc;
  }, {});

  return (
    <div className="space-y-12">
      {Object.entries(grouped).map(([category, topics]) => (
        <div key={category}>
          <h2 className="text-xl font-semibold mb-4 text-[var(--color-text-main)] px-2">
            {category}
          </h2>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {topics.map((topic) => (
              <SwiperSlide key={topic.id}>
                <div
                  onClick={() => navigate(`/topics/${topic.id}`)}
                  className="h-full min-h-[320px] flex flex-col justify-between bg-white border border-[var(--color-card-border)] rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                >
                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-accent-dark)] mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3 line-clamp-4">
                      {topic.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {topic.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[11px] bg-[var(--color-bg-light)] text-[var(--color-text-main)] px-2 py-1 rounded-full border border-[var(--color-accent-dark)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default PrepTopicsGrid;
