namespace Day10_demo_3
{
    internal class Program
    {
        
        static void Main(string[] args)
        {
            // text to speech conversion
            //Console.WriteLine("Hello, World!");
            SpeechSynthesizer synth = new SpeechSynthesizer();
            synth.Speak("Hello, welcome to Text to Speech conversion app");
        }
    }
}
