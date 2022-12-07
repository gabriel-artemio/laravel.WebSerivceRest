using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AfSistemas.Gestao
{
    class Conexao
    {
        public MySqlConnection con;
        public Conexao()
        {
            con = new MySqlConnection(ConfigurationManager.ConnectionStrings["CC"].ConnectionString);
        }
        public static string? tipo;
    }
}