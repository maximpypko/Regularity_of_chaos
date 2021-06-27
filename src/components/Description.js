function Description() {
  
  return (
    <>
      <h2>Предлагаю ознакомится с несколькими простыми правилами:</h2>
      <hr/>
      <p>В игре будет три точки,они будут образовывать треугольник. Он может быть любым, но для наглядности я рекомендую располагать точки чтобы они образовывали треугольник близкий или похожий на равнобедренный. Допустим это будут точки A, B и C. Затем необходимо определить первую точку с которой все начнётся. Её расположение также непринципиально.
      </p>
      <hr/>
      <p>Далее мы будем бросать кубик, выбирая рандомно число от 1 до 6:</p>
      <p>1.Если выпадает число от 1 до 2, мы ставим еще одну точку на середине отрезка от нашей последней точки до вершины треугольника <span>A</span>.</p>
      <p>2.Если выпадает число от 3 до 4, мы ставим еще одну точку на середине отрезка от нашей последней точки до вершины треугольника <span>B</span>.</p>
      <p>3.Если выпадает число от 5 до 6, мы ставим еще одну точку на середине отрезка от нашей последней точки до вершины треугольника <span>C</span>.</p>
      <hr/>
      <p>Посмотрим что из этого получится...</p>
    </>
  )
}

export default Description;