import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FaDownload } from 'react-icons/fa';

const PdfTicket = ({ payment }) => {
  const generatePdf = () => {
    const doc = new jsPDF();

    // Title with color
    doc.setFontSize(22);
    doc.setTextColor(40, 60, 134); // Dark blue
    doc.text(' Payment Ticket', 20, 20);

    // Draw table
    autoTable(doc, {
      startY: 30,
      head: [['Field', 'Details']],
      body: [
        [' Email', payment.email],
        [' Price', `${payment.price} Tk.`],
        [' Transaction ID', payment.transactionId],
        ['  Selected Seats', payment.selectedSeats.join(', ') || 'None'],
      ],
      styles: { halign: 'left', fontSize: 12 },
      headStyles: { fillColor: [41, 128, 185] }, // Blue header
      alternateRowStyles: { fillColor: [245, 245, 245] },
    });

    doc.save(`ticket-${payment.transactionId}.pdf`);
  };

  return (
    <button onClick={generatePdf} className="btn btn-primary">
      <FaDownload className="mr-2" />
      Download Ticket
    </button>
  );
};

export default PdfTicket;
