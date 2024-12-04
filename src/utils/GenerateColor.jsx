const generateColor = (userId) => {
    const colors = [
      '#28a745', 
      '#fd7e14', 
      '#007bff',
      '#6f42c1', 
      '#e83e8c', 
      '#ffc107', 
      '#17a2b8', 
      '#dc3545', 
      '#20c997', 
      '#343a40', 
    ];
    return colors[(userId - 1) % colors.length]; 
  };

  export default generateColor;