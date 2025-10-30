import './TimelineFilters.css';

function TimelineFilters({ filters, onFilterChange }) {
  const filterOptions = [
    { id: 'professional', label: 'Professional Experience' },
    { id: 'research', label: 'Research Experience' },
    { id: 'extra-curricular', label: 'Extra-Curricular & Volunteering' },
    { id: 'competitions', label: 'Competitions' },
  ];

  const handleCheckboxChange = (filterId) => {
    if (filters.includes(filterId)) {
      onFilterChange(filters.filter(f => f !== filterId));
    } else {
      onFilterChange([...filters, filterId]);
    }
  };

  return (
    <div className="timeline-filters">
      <h3 className="filters-title">Filter by Category</h3>
      <div className="filters-container">
        {filterOptions.map(option => (
          <label key={option.id} className="filter-checkbox">
            <input
              type="checkbox"
              checked={filters.includes(option.id)}
              onChange={() => handleCheckboxChange(option.id)}
            />
            <span className="checkbox-label">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default TimelineFilters;
