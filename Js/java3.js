const pizza = document.getElementById("pizza");
let tamaño = ["pizza personal","pizza mediana","pizza familiar"]
let sabor = ["pollo champiñones","hawaiana","carnes","mexicana","criolla","vegetariana","carne y pollo"]
let con = ["con queso", "con piña", "con jamón", "con salami", "con nachos", "con maiz"]
let sin = ["sin queso", "sin piña", "sin jamón", "sin salami", "sin nachos", "sin maiz"]
let adicion = ["con salsa", "con borde de bocadillo", "cabano", "extra guacamole", "extra carne molida", "adicion de salchicha", "adicion de champiñones"]

const pizzaf = () => {
  let pizzas = prompt("¿Qué pizza desea ordenar?").toLocaleLowerCase();
  switch (pizzas) {
    case tamaño[0]:
      let sabor1 = prompt("¿Que sabor desea?").toLocaleLowerCase();
      switch (sabor1){
      case sabor[0]:
        let Con1 = prompt("¿Con o sin queso?").toLocaleLowerCase();
        switch (Con1) {
          case con[0]:
            let adicionS = prompt("¿Con salsa o con borde de bocadillo?").toLocaleLowerCase();
            switch (adicionS) {
              case adicion[0]:
                alert(`Su pedido es una ${tamaño[0]} de ${sabor[0]}, ${con[0]} y ${adicion[0]}`)
                break;
                case adicion[1]:
                  alert(`Su pedido es una ${tamaño[0]} de ${sabor[0]}, ${con[0]} y ${adicion[1]}`)
               break;
               case "no":
                    alert(`Su pedido es una ${tamaño[0]} de ${sabor[0]}, ${con[0]}`)
                 break;
              default:
                alert("Opción incorrecta, intentelo de nuevo")
                break;
            }
            break;
            case sin[0]:
              let adicionS2 = prompt("¿Con salsa o con borde de bocadillo?").toLocaleLowerCase();
              switch (adicionS2) {
                case adicion[0]:
                  alert(`Su pedido es una ${tamaño[0]} de ${sabor[0]}, ${sin[0]} y ${adicion[0]}`)
                  break;
                  case adicion[1]:
                    alert(`Su pedido es una ${tamaño[0]} de ${sabor[0]}, ${sin[0]} y ${adicion[1]}`)
                 break;
                 case "no":
                    alert(`Su pedido es una ${tamaño[0]} de ${sabor[0]}, ${sin[0]}`)
                 break;
                default:
                  alert("Opción incorrecta, intentelo de nuevo")
                  break;}
              break;
          case "no":
            alert(`Su pedido es una ${tamaño[0]} de ${sabor[0]}`)
            break;
            default:
              alert("opcion invalida, intentelo de nuevo")
              break;
        }
        break;
        case sabor[1]:
          let con2 = prompt("¿Con o sin piña?").toLocaleLowerCase();
          switch (con2) {
            case con[1]:
             let adicionS3 = prompt("¿Con o sin salami?").toLocaleLowerCase();
             switch (adicionS3) {
               case con[3]:
                 alert(`Su pedido es una ${tamaño[0]} de ${sabor[1]}, ${con[1]} y ${con[3]}`)
                 break;
                 case sin[3]:
                  alert(`Su pedido es una ${tamaño[0]} de ${sabor[1]}, ${con[1]} y ${sin[3]}`)
                  break;
                  case "no":
                 alert(`Su pedido es una ${tamaño[0]} de ${sabor[1]}, ${con[1]}`)
                 break;
               default:
                 alert("Opción invalida, intentlo de nuevo")
                 break;
             }
              break;
              case sin[1]:
                let adicionS4 = prompt("¿Con o sin salami?").toLocaleLowerCase();
             switch (adicionS4) {
               case con[3]:
                 alert(`Su pedido es una ${tamaño[0]} de ${sabor[1]}, ${sin[1]} y ${con[3]}`)
                 break;
                 case sin[3]:
                  alert(`Su pedido es una ${tamaño[0]} de ${sabor[1]}, ${sin[1]} y ${sin[3]}`)
                  break;
                  case "no":
                 alert(`Su pedido es una ${tamaño[0]} de ${sabor[1]}, ${sin[1]}`)
                 break;
               default:
                 alert("Opción invalida, intentelo de nuevo")
                 break;
             }
                break;
                case "no":
                  alert(`Su pedido es una ${tamaño[0]} de ${sabor[1]}`)
                  break;
            default:
              alert("Opción invalida, intentelo de nuevo")
              break;
          }
          break;
          case sabor[2]:
            let con3 = prompt("¿Con o sin salami?").toLocaleLowerCase();
            switch (con3) {
              case con[3]:
                let con4 = prompt("¿Con o sin queso?").toLocaleLowerCase();
                switch (con4) {
                  case con[0]:
                    let adicionS5 = prompt("¿Con Cabano?").toLocaleLowerCase();
                    switch (adicionS5) {
                      case "si":
                        alert(`Su pedido es una ${tamaño[0]} de ${sabor[2]}, ${con[3]}, ${con[0]} y con ${adicion[2]}`)
                        break;
                        case "no":
                          alert(`Su pedido es una ${tamaño[0]} de ${sabor[2]}, ${con[3]}, ${con[0]}`)
                          break;
                      default:
                        break;
                    }
                    break;
                    case sin[0]:
                      let adicionS6 = prompt("¿Con Cabano?").toLocaleLowerCase();
                    switch (adicionS6) {
                      case "si":
                        alert(`Su pedido es una ${tamaño[0]} de ${sabor[2]}, ${con[3]}, ${sin[0]} y con ${adicion[2]}`)
                        break;
                        case "no":
                          alert(`Su pedido es una ${tamaño[0]} de ${sabor[2]}, ${con[3]}, ${sin[0]}`)
                          break;
                      default:
                        break;
                    }
                      break;
                      case "no":
                        alert(`Su pedido es una ${tamaño[0]} de ${sabor[2]}, ${con[3]}`)
                    break;
                  default:
                    alert("opción invalida, intentelo de nuevo")
                    break;
                }
                break;
                case sin[3]:
                  let con5 = prompt("¿Con o sin queso?").toLocaleLowerCase();
                switch (con5) {
                  case con[0]:
                    let adicionS7 = prompt("¿Con Cabano?").toLocaleLowerCase();
                    switch (adicionS7) {
                      case "si":
                        alert(`Su pedido es una ${tamaño[0]} de ${sabor[2]}, ${sin[3]}, ${con[0]} y con ${adicion[2]}`)
                        break;
                        case "no":
                          alert(`Su pedido es una ${tamaño[0]} de ${sabor[2]}, ${sin[3]}, ${con[0]}`)
                          break;
                      default:
                        break;
                    }
                    break;
                    case sin[0]:
                      let adicionS8 = prompt("¿Con Cabano?").toLocaleLowerCase();
                    switch (adicionS8) {
                      case "si":
                        alert(`Su pedido es una ${tamaño[0]} de ${sabor[2]}, ${sin[3]}, ${sin[0]} y con ${adicion[2]}`)
                        break;
                        case "no":
                          alert(`Su pedido es una ${tamaño[0]} de ${sabor[2]}, ${sin[3]}, ${con[0]}`)
                          break;
                      default:
                        break;
                    }
                      break;
                      case "no":
                        alert(`Su pedido es una ${tamaño[0]} de ${sabor[2]}, ${sin[3]}`)
                    break;
                  default:
                    alert("opción invalida, intentelo de nuevo")
                    break;
                }
                  break;
                  case "no":
                    alert(`Su pedido es una ${tamaño[0]} de ${sabor[2]}`)
                break;
              default:
                alert("Opción invalida, intentelo de nuevo")
                break;
            }
            break;
            default:
              alert("Ese no es un sabor de pizza, intentelo de nuevo")
              break;}    
      break;
      case tamaño[1]:
        let sabor2 = prompt("¿Qué sabor desea?").toLocaleLowerCase();
        switch (sabor2) {
          case sabor[3]:
            let con6 = prompt("¿Con o sin nachos?").toLocaleLowerCase();
            switch (con6) {
              case con[4]:
                let adicionS9 = prompt("¿Con Extra guacamole?").toLocaleLowerCase();
               switch (adicionS9) {
                 case "si":
                   alert(`Su pedido es una ${tamaño[1]} ${sabor[3]}, ${con[4]} y con ${adicion[3]}`)
                   break;
                   case "no":
                    alert(`Su pedido es una ${tamaño[1]} ${sabor[3]}, ${con[4]}`)
                    break;
                 default:
                   alert("Opción invalida, intentelo de nuevo")
                   break;
               }
                break;
                case sin[4]:
                  let adicionS10 = prompt("¿Con Extra guacamole?").toLocaleLowerCase();
               switch (adicionS10) {
                 case "si":
                   alert(`Su pedido es una ${tamaño[1]} ${sabor[3]}, ${sin[4]} y con ${adicion[3]}`)
                   break;
                   case "no":
                    alert(`Su pedido es una ${tamaño[1]} ${sabor[3]}, ${sin[4]}`)
                    break;
                 default:
                   alert("Opción invalida, intentelo de nuevo")
                   break;
               }
                  break;
                  case "no":
                    alert(`Su pedido es una ${tamaño[1]} ${sabor[3]}`)
                break;
              default:
                alert("Opción invalida, intentelo de nuevo")
                break;
            }
            break;
            case sabor[4]:
              let con7 = prompt("¿Con o sin maiz?").toLocaleLowerCase();
              switch (con7) {
                case con[5]:
                  let con8 = prompt("¿Con o sin queso?").toLocaleLowerCase();
                  switch (con8) {
                    case con[0]:
                      let adicionS11 = prompt("¿Con Extra carne molida?").toLocaleLowerCase();
                      switch (adicionS11) {
                        case "si":
                          alert(`Su pedido es una ${tamaño[1]} ${sabor[4]}, ${con[5]}, ${con[0]} y con ${adicion[4]}`)
                          break;
                          case "no":
                            alert(`Su pedido es una ${tamaño[1]} ${sabor[4]}, ${con[5]}, ${con[0]}`)
                            break;
                        default:
                          alert("Opción invalida, intentelo de nuevo")
                          break;
                      }
                      break;
                      case sin[0]:
                        let adicionS12 = prompt("¿Con Extra carne molida?").toLocaleLowerCase();
                      switch (adicionS12) {
                        case "si":
                          alert(`Su pedido es una ${tamaño[1]} ${sabor[4]}, ${con[5]}, ${sin[0]} y con ${adicion[4]}`)
                          break;
                          case "no":
                            alert(`Su pedido es una ${tamaño[1]} ${sabor[4]}, ${con[5]}, ${sin[0]}`)
                            break;
                        default:
                          alert("Opción invalida, intentelo de nuevo")
                          break;
                      }
                        break;
                        case "no":
                          alert(`Su pedido es una ${tamaño[1]} ${sabor[4]}, ${con[5]}`)
                      break;
                    default:
                      break;
                  }
                  break;
                  case sin[5]:
                    let con9 = prompt("¿Con o sin queso?").toLocaleLowerCase();
                    switch (con9) {
                      case con[0]:
                        let adicionS12 = prompt("¿Con Extra carne molida?").toLocaleLowerCase();
                      switch (adicionS12) {
                        case "si":
                          alert(`Su pedido es una ${tamaño[1]} ${sabor[4]}, ${sin[5]}, ${con[0]} y con ${adicion[4]}`)
                          break;
                          case "no":
                            alert(`Su pedido es una ${tamaño[1]} ${sabor[4]}, ${sin[5]}, ${con[0]}`)
                            break;
                        default:
                          break;
                      }
                        break;
                        case sin[0]:
                          let adicionS13 = prompt("¿Con Extra carne molida?").toLocaleLowerCase();
                      switch (adicionS13) {
                        case "si":
                          alert(`Su pedido es una ${tamaño[1]} ${sabor[4]}, ${sin[5]}, ${sin[0]} y con ${adicion[4]}`)
                          break;
                          case "no":
                            alert(`Su pedido es una ${tamaño[1]} ${sabor[4]}, ${sin[5]}, ${sin[0]}`)
                            break;
                        default:
                          break;
                      }
                          break;
                          case "no":
                            alert(`Su pedido es una ${tamaño[1]} ${sabor[4]}, ${sin[5]}`)
                        break;
                      default:
                        break;
                    }
                    break;
                    case "no":
                      alert(`Su pedido es una ${tamaño[1]} de ${sabor[4]}`)
                  break;
                default:
                  alert("Opción invalida, intentelo de nuevo")
                  break;
              }
            break;
          default:
            alert("Ese no es un sabor de pizza, intentelo de nuevo")
            break;
        }
      break;
      case tamaño[2]:
        let sabor3 = prompt("¿Qué sabor desea?").toLocaleLowerCase();
        switch (sabor3) {
          case sabor[5]:
            let con10 = prompt("Con o sin queso").toLocaleLowerCase();
            switch (con10) {
              case con[0]:
                alert(`Su pedido es una ${tamaño[2]} ${sabor[5]}, ${con[0]}`)
                break;
                case sin[0]:
                  alert(`Su pedido es una ${tamaño[2]} ${sabor[5]}, ${sin[0]}`)
                  break;
                  case "no":
                    alert(`Su pedido es una ${tamaño[2]} ${sabor[5]}`)
                break;
              default:
                alert("Opción invalida, intentelo de nuevo")
                break;
            }
            break;
            case sabor[6]: 
            let adicionS14 = prompt("¿Con adición de salchicha o adición de champiñones?").toLocaleLowerCase();
            switch (adicionS14) {
              case adicion[5]:
               alert(`Su pedido es una ${tamaño[2]} ${sabor[6]}, ${adicion[5]}`)
                break;
                case adicion[6]:
                  alert(`Su pedido es una ${tamaño[2]} ${sabor[6]}, ${adicion[6]}`)
                  break;
                  case "no":
                    alert(`Su pedido es una ${tamaño[2]} ${sabor[6]}`)
                break;
              default:
                alert("Opción invalida, intentelo de nuevo")
                break;
            }
              break; 
          default:
            alert("Ese no es un sabor de pizza, intentelo de nuevo")
            break;
        }
      break;
    default:
      alert("No manejamos ese tipo de pizza");
      break;
  }
};

pizza.onclick = function () {
  pizzaf();
};
