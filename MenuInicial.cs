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
    }
}