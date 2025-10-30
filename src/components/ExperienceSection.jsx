import { useState } from 'react';
import TimelineFilters from './TimelineFilters';
import TimelineVisual from './TimelineVisual';
import ItemModal from './ItemModal';
import { timelineData } from '../data';
import './ExperienceSection.css';

function ExperienceSection() {
  const [filters, setFilters] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter the timeline data based on selected filters
  const filteredData = filters.length === 0
    ? timelineData
    : timelineData.filter(item => filters.includes(item.category));

  const handleNodeClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 200); // Delay to allow modal animation
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-content">
        <h2 className="experience-title">My Experience Timeline</h2>
        <p className="experience-description">
          Explore my journey through an interactive 3D visualization. 
          Filter by category and click on any node to learn more.
        </p>
        
        <TimelineFilters filters={filters} onFilterChange={setFilters} />
        
        <div className="timeline-wrapper">
          <TimelineVisual
            filteredData={filteredData}
            onNodeClick={handleNodeClick}
            selectedItemId={selectedItem?.id}
          />
        </div>
        
        <ItemModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          item={selectedItem}
        />
      </div>
    </section>
  );
}

export default ExperienceSection;
