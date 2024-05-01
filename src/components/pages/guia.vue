<template>
    <!-- Main Content -->
<main class="section main-layout flow-intern">
	<section class="overflow-x-hidden">
		<article class="overflow-x-auto">
			<h2 style="margin-bottom: 1rem; text-align: center">Tarjeta Puntuación para Evaluar la Calidad del Suelo</h2>				
			<form class="form" id="form-calidad" autocomplete="off" novalidate action="recomendaciones.html" method="post">
				<div class="control-wrapper">
					<fieldset class = "border-field">
						<legend class="label">Información General</legend>
						<label class="label" for="fecha">Fecha:</label>
						<input type="date" id="fecha" name="fecha" required>
						<label class="label" for="hora">Hora:</label>
						<input type="time" id="hora" name="hora">
						<label class="label" for="municipio">Municipio:</label>
						<input type="text" id="municipio" name="municipio">
						<label class="label" for="vereda"><br>Vereda:</label>
						<input type="text" id="vereda" name="vereda">
					</fieldset>
					<!-- End fieldset 1-->
					<fieldset class = "border-field">
						<legend class="label">Predio y Cultivo</legend>
						<table class="table">
							<tbody>
								<tr class="table__row">
								<td class="table__cell">Nombre del predio:</td>
								<td class="table__cell"><input type="text" id="nombrePredio" name="nombrePredio"></td>
								<td class="table__cell">Nombre de la Cajuela:</td>
								<td class="table__cell"><input type="text" id="nombreCajuela" name="nombreCajuela"></td>
								</tr>
								<tr class="table__row">
								<td class="table__cell">Cultivo analizado:</td>
								<td class="table__cell"><input type="text" id="cultivoanalizado" name="cultivoanalizado"></td>
								<td class="table__cell">Área del Cultivo:</td>
								<td class="table__cell"> <input type="text" id="areaCultivo" name="areaCultivo"></td>
								</tr>
								<tr class="table__row">
								<td class="table__cell">Clima:</td>
								<td class="table__cell"><input type="text" id="clima" name="clima"></td>
								<td class="table__cell">Coordenadas:</td>
								<td class="table__cell"><input type="text" id="Coordenadas" name="Coordenadas"></td>
								</tr>
							</tbody>
						</table>
					</fieldset>
					<!-- End fieldset 2-->
					<fieldset class = "border-field">
						<legend class="label">Clase - Tipo - Consistencia</legend>
							<table>
								<thead>
									<tr class="table__row">
									<th colspan="2" class="table__cell">Clase Textural</th>
									<th colspan="2" class="table__cell">Tipo Estructura</th>
									<th colspan="2" class="table__cell">Consistencia</th>
									</tr>
								</thead>
								<tbody>
									<tr class="table__row">
									<td class="table__cell"><label><input type="checkbox" name="claseTextural" value="Arenoso">Arenoso</label></td>
									<td class="table__cell"><label><input type="checkbox" name="claseTextural" value="Limoso">Limoso</label></td>
									<td class="table__cell"><label><input type="checkbox" name="tipoEstructura" value="Prismaticas">Prismáticas</label></td>
									<td class="table__cell"><label><input type="checkbox" name="tipoEstructura" value="Columnar">Columnar</label></td>
									<td class="table__cell"><label><input type="checkbox" name="consistencia" value="Suelto">Suelto</label></td>
									<td class="table__cell"><label><input type="checkbox" name="consistencia" value="Friable">Friable</label></td>
									</tr>
									<tr class="table__row">
									<td class="table__cell"><label><input type="checkbox" name="claseTextural" value="Franco">Franco</label></td>
									<td class="table__cell"><label><input type="checkbox" name="claseTextural" value="Arcilloso">Arcilloso</label></td>
									<td class="table__cell"><label><input type="checkbox" name="tipoEstructura" value="Granulares">Granulares</label></td>
									<td class="table__cell"><label><input type="checkbox" name="tipoEstructura" value="Bloque">Bloque</label></td>
									<td class="table__cell"><label><input type="checkbox" name="consistencia" value="Firme">Firme</label></td>
									<td class="table__cell"><label><input type="checkbox" name="consistencia" value="Exfirme">Extremadamente Firme</label></td>
									</tr>
									<tr class="table__row">
									<td colspan="2" class="table__cell"><label><input type="checkbox" name="claseTextural" value="Otro">Otro:
									<input type="text" class="input-ajustado" id="Otro" name="Otro">
									</label></td>
									<td colspan="2" class="table__cell"><label><input type="checkbox" name="tipoEstructura" value="Laminar">Laminar</label></td>
									<td colspan="2" class="table__cell">&nbsp;</td>
									</tr>
								</tbody>
							</table>	
							<!-- end table -->
							<!-- table -->
							<table>
								<tbody>
									<tr class="table__row">
									<td width="165" class="table__cell">Color tabla Munsell:</td>
									<td width="144" class="table__cell"><input type="text" class="input-ajustado" id="tbmunsell" name="tbmunsell"></td>
									<td width="197" class="table__cell">Color sin tabla Munsell:</td>
									<td width="161" class="table__cell"><input type="text" class="input-ajustado" id="sinmunsell" name="sinmunsell"></td>
									</tr>
									<tr class="table__row">
									<td class="table__cell">Cantidad de lombrices:</td>
									<td class="table__cell"><input type="text" class="input-ajustado" id="ctlombrices" name="ctlombrices"></td>
									<td rowspan="2" class="table__cell">¿Cuáles son los organismos que evidencia?</td>
									<td rowspan="2" class="table__cell"><textarea name="organismos" id="organismos"></textarea></td>
									</tr>
									<tr class="table__row">
									<td class="table__cell">Cantidad de organismos:</td>
									<td class="table__cell"><input type="text" class="input-ajustado" id="ctorganismos" name="ctorganismos"></td>
									</tr>
								</tbody>
							</table>
							<!-- end table -->
							<!-- table -->
						<table>
							<thead>
								<tr class="table__row">
									<th colspan="2" class="table__cell">Capas Endurecidas cm</th>
									<th rowspan="2" class="table__cell">Profuncidad Penetrómtro MPa</th>
									<th rowspan="2" class="table__cell">Tiempo Infiltración min</th>
								</tr>
							<tr class="table__row">
								<td align="center" class="table__cell">Profundidad</td>
								<td align="center" class="table__cell">Grosor</td>
							</tr>
							</thead>
							<tbody>
								<tr class="table__row">
									<td class="table__cell"><label for="textfield"></label>
									<input type="text" class="input-ajustado" name="textfield" id="textfield"></td>
									<td class="table__cell"><label for="textfield4"></label>
									<input type="text"  class="input-ajustado" name="textfield4" id="textfield4"></td>
									<td class="table__cell"><label for="textfield7"></label>
									<input type="text" class="input-ajustado" name="textfield7" id="textfield7"></td>
									<td class="table__cell"><label for="textfield8"></label>
									<input type="text" class="input-ajustado" name="textfield8" id="textfield8"></td>
								</tr>
								<tr class="table__row">
									<td class="table__cell"><label for="textfield2"></label>
									<input type="text" class="input-ajustado" name="textfield2" id="textfield2"></td>
									<td class="table__cell"><label for="textfield5"></label>
									<input type="text" class="input-ajustado" name="textfield5" id="textfield5"></td>
									<td class="table__cell"><label for="textfield9"></label>
									<input type="text" class="input-ajustado" name="textfield9" id="textfield9"></td>
									<td class="table__cell"><label for="textfield10"></label>
									<input type="text" class="input-ajustado" name="textfield10" id="textfield10"></td>
								</tr>
								<tr class="table__row">
									<td class="table__cell"><label for="textfield3"></label>
									<input type="text" class="input-ajustado" name="textfield3" id="textfield3"></td>
									<td class="table__cell"><label for="textfield6"></label>
									<input type="text" class="input-ajustado" name="textfield6" id="textfield6"></td>
									<td class="table__cell"><label for="textfield11"></label>
									<input type="text" class="input-ajustado" name="textfield11" id="textfield11"></td>
									<td class="table__cell"><label for="textfield12"></label>
									<input type="text" class="input-ajustado" name="textfield12" id="textfield12"></td>
								</tr>
							</tbody>
						</table>
						<!-- end table -->
					</fieldset>
					
				</div>
				<div class="mt-10">
					<router-link to="/guia-indica-page" class="nav__link nav-link"><button type="submit" class="btn btn-primary button--lg w-full cursor-pointer">Siguiente</button></router-link>					
				</div>
			</form>
			<!-- End form -->
		</article>
		<!-- End article -->
	</section>
	<!-- End section -->
	<aside class="aside" >
		<ul class="aside__list" style="border: 1px solid black;">
			<li class="aside__item">
				<figure>
					<img class ="img-tamaño" src="../../assets/images/plantilla-3.png" alt="logo" loading="lazy" decoding="async"/>
				</figure>
				<p>Mis Suelos</p>
			</li>
			<li class="aside__item">
				<figure>
					<img class ="img-tamaño" src="../../assets/images/imgpredial.jpg" alt="logo" loading="lazy" decoding="async"/>
				</figure>
				<p>Mi Predial</p>
			</li>
			<li class="aside__item">
				<figure>
					<img class ="img-tamaño"  src="../../assets/images/Red.jpg" alt="logo" loading="lazy" decoding="async"/>
				</figure>
				<p>Red de Conocimientos</p>
			</li>
		</ul>
	</aside>
	<!-- End Aside -->
</main>
<!-- End Main Content -->
</template>
<style scoped>
@import "@/assets/styles/components/main-layout.css";
@import "@/assets/styles/base/global.css";
@import "@/assets/styles/pages/flow-intern.css";
@import "@/assets/styles/pages/form.css";
@import "@/assets/styles/pages/input.css";
@import "@/assets/styles/pages/table.css";
/* @import "@/assets/styles/pages/button.css"; */



.border-field {
    border: 1px solid #000000;
    padding: 10px;
    position: relative;
  }

  .label {
    font-size: 0.875rem;
    font-weight: 600;
    color: grey;
  }

  .input-ajustado {
    width: 100%;
    box-sizing: border-box;
    max-width: 100%; /* Ancho máximo del textarea */
  }

  .img-tamaño {
    width: 100px;
  }

  .aside__list {
    list-style: none;
  }

  .btn-primary {
    background-color: #1b568f;
    padding: 12px;
  }

</style>
   