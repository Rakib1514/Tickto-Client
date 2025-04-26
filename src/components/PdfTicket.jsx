import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FaDownload } from 'react-icons/fa';
import logo from '../Assets/icons/plane-ticket.png'; // ✅ Adjust this path based on your project structure

const PdfTicket = ({ payment }) => {
  const generatePdf = () => {
    const doc = new jsPDF();

    // Create an image object
    const img = new Image();
    img.src = logo;

    img.onload = () => {
      // Add image to PDF (x: 150, y: 10, width: 40, height: 20)
      doc.addImage(img, 'PNG', 150, 10, 30, 20);

      // Title
      // doc.setFontWeight('extrabold');
      doc.setFontSize(22);
      doc.setTextColor(40, 60, 134); // Dark blue
      doc.text('TickTo', 20, 20);

      // Table
      autoTable(doc, {
        startY: 40,
        head: [['Field', 'Details']],
        body: [
          ['Name', payment.name],
          ['Email', payment.email],
          ['Price', `${payment.price} Tk.`],
          ['Transaction ID', payment.transactionId],
          ['Selected Seats', payment.selectedSeats.join(', ') || 'None'],
        ],
        styles: { halign: 'left', fontSize: 12 },
        headStyles: { fillColor: [41, 128, 185] }, // Blue header
        alternateRowStyles: { fillColor: [245, 245, 245] },
      });

      // Save PDF
      doc.save(`TickTo-${payment.name}.pdf`);
    };
  };

  return (
    <button onClick={generatePdf} className="btn btn-sm">
      <FaDownload className="mr-2" />
      Download Ticket
    </button>
  );
};

export default PdfTicket;
