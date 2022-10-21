matriz = new Array();
caca = new Array();

const table = document.querySelector(".table");

matriz = [['B','M','C','E','B','O','L','A','A','P'],
          ['E','A','O','E','P','I','P','A','R','I'],
          ['K','N','B','D','W','O','E','I','E','P'],
          ['U','E','B','I','W','A','Y','C','K','O'],
          ['L','L','O','I','X','R','M','A','L','C'],
          ['J','S','L','H','E','V','A','V','A','A'],
          ['J','R','O','B','T','O','R','A','W','P'],
          ['K','T','B','W','Z','R','N','L','Y','R'],
          ['U','N','H','A','X','E','D','O','K','R'],
          ['Y','O','M','E','L','W','L','U','P','A']];

caca = [[0,0,1,1,1,1,1,1,0,1],
       [0,1,0,0,1,1,1,1,0,1],
       [0,1,0,0,0,0,0,0,0,1],
       [0,1,1,0,0,1,0,1,0,1],
       [0,1,1,0,0,1,0,1,0,1],
       [0,0,1,0,0,1,0,1,0,1],
       [0,0,1,0,0,1,0,1,0,0],
       [0,0,0,0,0,1,0,1,0,0],
       [1,1,1,1,0,1,0,1,0,0],
       [0,0,1,1,1,0,1,1,1,1]];


for(row = 0; row < 10; row++)
{   
    tr = document.createElement("tr");
    for(col = 0; col < 10; col++)
    {
        td = document.createElement("td");

        switch(caca[row][col])
        {
            case 1:
                td.style.background = "#2F4F4F";
                td.append(matriz[row][col]);
                tr.append(td);
            break;

            default:
                td.append(matriz[row][col]);
                tr.append(td);
            break; 
        }
    }

    table.appendChild(tr);
}