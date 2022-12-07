using Gestao.Cadastros;
using Gestao.Formularios;
using Gestao.Telas;

namespace Gestao
{
    public partial class MenuInicial : Form
    {
        public MenuInicial()
        {
            InitializeComponent();
        }

        private void d…CIMOTERCEIROToolStripMenuItem_Click(object sender, EventArgs e)
        {
            CalculoDecimo frm = new CalculoDecimo();
            frm.Show();
        }

        private void f…RIASToolStripMenuItem_Click(object sender, EventArgs e)
        {
            CalculoFerias frm = new CalculoFerias();
            frm.Show();
        }

        private void hORAEXTRAToolStripMenuItem_Click(object sender, EventArgs e)
        {
            CalculoHoraExtra frm = new CalculoHoraExtra();
            frm.Show();
        }

        private void vALETRANSPORTEToolStripMenuItem_Click(object sender, EventArgs e)
        {
            CalculoValeTransporte frm = new CalculoValeTransporte();
            frm.Show();
        }

        private void fUNCION¡RIOSToolStripMenuItem_Click(object sender, EventArgs e)
        {
            CadFuncionario frm = new CadFuncionario();
            frm.Show();
        }
    }
}