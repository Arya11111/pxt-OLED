//% color="#AA278D" height=100 icon="\uf062" block="OLED"
namespace OLED {
    /**
     * OLED 12864 display string
     */
    //% blockId=oled_show_text
    //% weight=90
    //% line.min=0 line.max=7
    //% text.defl="DFRobot"
    //% block="OLED show line %line|text %text"
    //% shim=OLED::showText
    export function showUserText(line: number, text: string): void {
        return;
    }
    /**
     * OLED 12864 shows the number
     * @param line line num (8 pixels per line), eg: 0
     * @param n value , eg: 2019
     */
    //% blockId=oled_show_number
    //% weight=90
    //% line.min=0 line.max=7
    //% block="OLED show line %line|number %n"
    //% shim=OLED::showNumber
    export function showUserNumber(line: number, n: number): void {
        return;
    }

    /**
     * clears the screen.
     */
    //% blockId=oled_clear_screen
    //% block="clear OLED display"
    //% icon="\uf1ec" 
    //% weight=89
    //% shim=OLED::clearDisplay
    export function clear(): void {
        return;
    }
}
