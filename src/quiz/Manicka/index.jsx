export const Manicka = () => {
  return (
    <MultipleChoice
      title="Máničky"
      quizText={
        <>
          <q>
            {' '}
            Snažili se mě přesvědčit, ať se ostříhám, že mi to nesluší. Ať jsem
            rozumný. Odmítl jsem. Tak mi řekli, že budu mít problémy.
          </q>
          <p>Písničkář Jaroslav Hutka</p>
          <p>
            Které z osob na fotkách by mohly mít problémy kvůli svému účesu?
            Označ:
          </p>
        </>
      }
      options={{
        1: `/img/manicka1.png`,
        2: `/img/manicka2.png`,
        3: `/img/manicka3.png`,
        4: `/img/manicka4.png`,
      }}
      solution={{ 1: true, 2: true, 3: true, 4: false }}
    />
  );
};
