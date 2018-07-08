package im.kuo.core.tools;

import com.fasterxml.uuid.Generators;
import com.fasterxml.uuid.NoArgGenerator;

public class GuidGenerator {

    public static String generate() {
        NoArgGenerator randomBasedGenerator = Generators.randomBasedGenerator();
        return randomBasedGenerator.generate().toString();
    }
}
