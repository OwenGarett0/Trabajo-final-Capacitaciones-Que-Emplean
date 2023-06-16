#include <cpprest/http_listener.h>
#include <cpprest/json.h>

#include <mysql_driver.h>
#include <mysql_connection.h>

#include <iostream>
#include <string>

using namespace web;
using namespace web::http;
using namespace web::http::experimental::listener;  


int main(){
    sql::mysql::MySQL_Driver *driver;
    sql::Connection *con;
    driver = sql::mysql::get_mysql_driver_instance();

    // Conexión a la db
    conection = driver->connect("INSERTAR URL DB", "INSERTAR USER", "INSERTAR PASS");
    conection->setSchema("INSERTAR NOMBRE DB");

    sql::Sentencias *stcs;
    sql::Resultado *res;
    stmt = conection->createStatement();

    //Consultas
    res = stmt->executeQuery("SELECT * FROM tabla");
    while (res->next()) {
        std::string columna1 = res->getString("columna1");
        int columna2 = res->getInt("columna2");}

    delete res;
    delete stmt;
    delete conection;

    return 0;
}