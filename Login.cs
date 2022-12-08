using AfSistemas.Gestao.Forms;
using MySql.Data.MySqlClient;
using System.Data;

namespace AfSistemas.Gestao
{
    public partial class Login : Form
    {
        Conexao cn = new Conexao();
        public Login()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string cs = @"server=localhost;userid=root;password=arlabs2022;database=teste";
            var con = new MySqlConnection(cs);
            try
            {
                if (txtUser.Text != "" || txtSenha.Text != "")
                {
                    using (con)
                    {
                        con.Open();
                        string sql = "sp_login";
                        var cmd = new MySqlCommand(sql, con);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("unome", txtUser.Text);
                        cmd.Parameters.AddWithValue("usenha", txtSenha.Text);
                        MySqlDataReader dr = cmd.ExecuteReader();
                        if (dr.HasRows)
                        {
                            dr.Read();
                            if (dr[3].ToString() == "admin")
                            {
                                Conexao.tipo = "A";
                            }
                            else if(dr[3].ToString() == "user")
                            {
                                Conexao.tipo = "U";
                            }
                            dashboard_func();
                        }
                        else
                        {
                            MessageBox.Show("Login incorreto", "Atenção", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        }
                    }
                }
                else
                {
                    MessageBox.Show("Preencha todos os campos", "Erro", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }
        private void dashboard_func()
        {
            this.Hide();
            Dashboard d = new Dashboard();
            d.ShowDialog();
            this.Close();
        }
    }
}