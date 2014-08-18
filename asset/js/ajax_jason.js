var xmlhttp = new XMLHttpRequest();
            var url = "_json.txt";

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    myFunction(xmlhttp.responseText);

                }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            function myFunction(response) {

                var config = JSON.parse(response);
                var configOne = config[0];
                var configKey = Object.keys(config[0]);
                var i,j;
                var out = "<table><tr>";
                for (i=0; i < configKey.length; i++) {
                     out += "<th>" + configKey[i] + "</th>";
                }
              
                out += "</tr>"
               
                /*for (i = 0; i < config.length; i++) {
                    out += "<tr><td>" +
                    config[i].host +
                    "</td><td>" +
                    config[i].server_id +
                    "</td><td>" +
                    config[i].server_load_alarm +
                    "</td><td>" +
                    config[i].user +
                    "</td><td>" +
                    config[i].verbose +
                    "</td><td>" +
                    config[i].test_mode +
                    "</td><td>" +
                    config[i].debug_mode +
                    "</td><td>" +
                    config[i].log_file_path +
                    "</td><td>" +
                    config[i].send_notifications
                    "</td></tr>";
                }*/

                //Instead of referring to the key literally above, the following code dynamically access the json key value pairs. 
                //Hence the code block can be used array of one to manny json objects.
                for (i = 0; i < config.length; i++) {
                    out += "<tr><td>";
                    for (j = 0; j < configKey.length; j++) {
                        out += config[i][configKey[j]];
                        if (j < configKey.length-1)
                            out += "</td><td>";
                    }
                    out += "</td></tr>";
                }
                out += "</table>"
                document.getElementById("id01").innerHTML = out;
            }