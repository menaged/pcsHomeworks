namespace homeWork51
{
    internal class HW51
    {
        public enum Color
        {
            Red,
            Green,
            Blue
        }

        public enum Pattern
        {
            Striped,
            Checked,
            Plain
        }

        public class Shirt
        {
            public Color Color { get; }
            public Pattern Pattern { get; }

            public Shirt(Color color, Pattern pattern)
            {
                Color = color;
                Pattern = pattern;
            }
        }
    
        class forogram
        {
            static void Main(string[] args)
            {
                List<Shirt> shirts = GenerateAllShirts();

                foreach (Shirt shirt in shirts) {
                    Console.WriteLine($"{shirt.Color}:{shirt.Pattern}");
                }
            }

            static List<Shirt> GenerateAllShirts()
            {
                List<Shirt> shirts = new List<Shirt>();

                foreach (Color color in Enum.GetValues(typeof(Color))) {
                    foreach (Pattern pattern in Enum.GetValues(typeof(Pattern))) {
                        Shirt shirt = new Shirt(color, pattern);
                        shirts.Add(shirt);
                    }
                }

                return shirts;
            }
        }
    }
}



 