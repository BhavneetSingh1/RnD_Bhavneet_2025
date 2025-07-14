 const modalOverlay = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');

    function openModal(id) {
      modalBody.innerHTML = getModalContent(id);
      modalOverlay.style.display = 'flex';
    }
    function closeModal() {
      modalOverlay.style.display = 'none';
    }

    function getModalContent(id) {
      const content = {
        proj1: `
          <h2>Interactive Chat UI</h2>
          <p>Built with React and Socket.io, this UI features live typing indicators, message timestamps, and adaptive theming.</p>
          <p><strong>Highlights:</strong></p>
          <ul>
            <li>Real-time typing animation</li>
            <li>Dark/light mode toggle</li>
            <li>Accessible keyboard navigation</li>
          </ul>
        `,
        proj2: `
          <h2>SVG Data Visualizer</h2>
          <p>An animated data dashboard using D3.js and SVG transitions, ideal for exploring trends.</p>
          <p><strong>Highlights:</strong></p>
          <ul>
            <li>Dynamic tooltip & hover interactions</li>
            <li>Responsive and mobile-friendly charts</li>
            <li>Smooth enter/exit transitions</li>
          </ul>
        `
      };
      return content[id] || '<p>No details available.</p>';
    }
 
