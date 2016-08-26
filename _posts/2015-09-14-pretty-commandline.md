---
title:  		"Una terminal personalizada"
date:   		2015-09-14 1:43:11
permalink: 		blog/personalizar-la-terminal
type: 			post
description: 	"Personaliza tu terminal y así poco a poco se volverá una herramienta muy útil"
image: 			cute-command.png
read_time : 4
feature_image: recommend-woods
---

Al principio la terminal me parecía muy aburrida y más con sus colores blanco y negro, pero luego me di cuenta que se podía personalizar, así que la puse como más me gustaba y ahora no hay día que no la use.

Antes de mostrarles los pasos para hacerlo debo darle créditos a [Paul Irish](https://github.com/paulirish/dotfiles/) ya que tomé como base el bash_profile y bash_prompt que el uso para hacer el mío.


Pasos:

1. En el root crea un archivo que se llame .bash_profile `touch .bash_profile`

2. Copia el mío y lo guardas
{% gist 6bbd96b0c3f2e62ba12b %}

En la terminal escribe `source .bash_profile`

Reinicia la terminal y verás la magia, si no te gustan los colores se los puedes cambiar en la línea 81 y 96 y si tampoco te gustan los emojis los puedes borrar o cambiar.
